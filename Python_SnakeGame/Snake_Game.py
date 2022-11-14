
import pygame
import random
from enum import Enum
from collections import namedtuple

pygame.init() #initialize pygame
# font = pygame.font.Font('arial.ttf', 25)

font = pygame.font.Font('freesansbold.ttf', 25)



class Direction(Enum):
    RIGHT = 1
    LEFT = 2
    UP = 3
    DOWN = 4

Point = namedtuple('Point', 'x, y')

#rgb colors
WHITE = (255, 255, 255)
RED = (200, 0, 0)
BLUE1 = (0, 0, 255)
BLUE2 = (0, 100, 255)
BLACK = (0, 0, 0)



BLOCK_SIZE = 20 #Constants
SPEED = 10


class SnakeGame:
    
    def __init__(self, w=640, h=400):
        self.w = w
        self.h = h
        #init display
        self.display = pygame.display.set_mode((self.w, self.h))
        pygame.display.set_caption("Snake")
        self.clock = pygame.time.Clock()
        #init game state
        self.direction = Direction.RIGHT
        
        self.head = Point(self.w/2, self.h/2) #for x and y
        self.snake = [self.head, 
                      Point(self.head.x-1, self.head.y),
                      Point(self.head.x-(2*BLOCK_SIZE), self.head.y)
                      ]
        self.score = 0
        self.food = None
        self._place_food()
        
    def _place_food(self):
        #self.w-blocksize and then divided(//them) and lastly it multiply them.
        # x = random.randint(0, (self.w-BLOCK_SIZE)//BLOCK_SIZE)*BLOCK_SIZE#620
        # y = random.randint(0, (self.w-BLOCK_SIZE)//BLOCK_SIZE)*BLOCK_SIZE#620
        
        x = random.randint(0, 5)
        y = random.randint(0, 5)
        
        self.food = Point(x, y)
        if self.food in self.snake:
            self._place_food()
        
    def play_step(self):
        # 1. collect user input
        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                pygame.quit()
                quit()
            
            #For Directions
            if event.type == pygame.KEYDOWN:
                
                if event.key == pygame.K_LEFT:
                    self.direction = Direction.LEFT
                elif event.key == pygame.K_RIGHT:
                    self.direction = Direction.RIGHT
                elif event.key == pygame.K_UP:
                    self.direction = Direction.UP
                elif event.key == pygame.K_DOWN:
                    self.direction = Direction.DOWN
                
        
        # 2. move our snake
        self._move(self.direction)#update the head
        self.snake.insert(0, self.head)
        
        # 3. check if game over
        game_over = False
        if self._is_collision():
            game_over = True
            return game_over, self.score
        
        # 4. place new food or just move
        if self.head == self.food:
            self.score += 1
            self._place_food()
        else:
            self.snake.pop()#removing the last element of our snake
        
        # 5. update ui and and clock
        self._update_ui()
        self.clock.tick(SPEED)
        # 6. return game over and score
        return game_over, self.score
    
    
    def _is_collision(self):
       #hits boundary
       if self.head.x > self.w - BLOCK_SIZE or self.head.x < 0 or self.head.y > self.h - BLOCK_SIZE or self.head.y < 0:
           return True
       
       #hits itself 
       if self.head in self.snake[1:]:
           return True
       
       return False
        
    
    def _update_ui(self):
        self.display.fill(BLACK)
        
        #Draw snake
        for pt in self.snake:
            pygame.draw.rect(self.display, BLUE1, pygame.Rect(pt.x, pt.y, BLOCK_SIZE, BLOCK_SIZE))
            pygame.draw.rect(self.display, BLUE2, pygame.Rect(pt.x+4, pt.y+4, 12, 12))

        
        
        #Draw snake food
        
        
        text =  font.render("Score: " + str(self.score), True, WHITE)
        self.display.blit(text, [0, 0])
        pygame.display.flip()

    #move snake function
    def _move(self, direction):
        x = self.head.x
        y = self.head.y
        
        if direction == Direction.RIGHT:
            x += BLOCK_SIZE
            
        elif direction == Direction.LEFT:
            x -= BLOCK_SIZE
            
        elif direction == Direction.DOWN:
            y += BLOCK_SIZE
            
        elif direction == Direction.UP:
            y -= BLOCK_SIZE
            
        self.head = Point(x, y)        



if __name__ == "__main__":
    game = SnakeGame()
    
    
    # game loop
    while True:
        game_over, score = game.play_step()
        
        if game_over == True:
            break
        
    print("Final Score", score)
        
        # break if game over
        
        
    pygame.quit()





# import pygame module in this program
# import pygame
 
# # activate the pygame library
# # initiate pygame and give permission
# # to use pygame's functionality.
# pygame.init()
 
# # define the RGB value for white,
# #  green, blue colour .
# white = (255, 255, 255)
# green = (0, 255, 0)
# blue = (0, 0, 128)
 
# # assigning values to X and Y variable
# X = 400
# Y = 400
 
# # create the display surface object
# # of specific dimension..e(X, Y).
# display_surface = pygame.display.set_mode((X, Y))
 
# # set the pygame window name
# pygame.display.set_caption('Show Text')
 
# # create a font object.
# # 1st parameter is the font file
# # which is present in pygame.
# # 2nd parameter is size of the font
# font = pygame.font.Font('freesansbold.ttf', 32)
 
# # create a text surface object,
# # on which text is drawn on it.
# text = font.render('GeeksForGeeks', True, green, blue)
 
# # create a rectangular object for the
# # text surface object
# textRect = text.get_rect()
 
# # set the center of the rectangular object.
# textRect.center = (X // 2, Y // 2)
 
# # infinite loop
# while True:
 
#     # completely fill the surface object
#     # with white color
#     display_surface.fill(white)
 
#     # copying the text surface object
#     # to the display surface object
#     # at the center coordinate.
#     display_surface.blit(text, textRect)
 
#     # iterate over the list of Event objects
#     # that was returned by pygame.event.get() method.
#     for event in pygame.event.get():
 
#         # if event object type is QUIT
#         # then quitting the pygame
#         # and program both.
#         if event.type == pygame.QUIT:
 
#             # deactivates the pygame library
#             pygame.quit()
 
#             # quit the program.
#             quit()
 
#         # Draws the surface object to the screen.
#         pygame.display.update()