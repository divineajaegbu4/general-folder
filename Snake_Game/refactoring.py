import pygame
import random

# 1: Create Game Window
# 2: Moving a Single Block around the Window
# 3: Build an Snake with Several Blocks
# 4: Add Food and Make the Snake Grow
# 5: Game Over when Hitting the Game Boundaries
#   Conclusion


class Game:
    def __init__(self):

        pygame.init()

        # Constants

        self.WINDOW_WIDTH = 900
        self.WINDOW_HEIGHT = 600
        self.FPS = 9
        self.MENU_FPS = 60
        self.CELLSIZE = 20
        self.CELLWIDTH = int(self.WINDOW_WIDTH / self.CELLSIZE)
        self.CELLHEIGHT = int(self.WINDOW_WIDTH / self.CELLSIZE)
        

        # Colors
        self.BLACK = (0, 0, 0)
        self.CRIMSON = (255, 87, 51)
        self.RED = (255, 0, 0)
        self.GREEN = (0, 255, 0)
        self.DARKGREEN = (0, 155, 0)
        self.DARKGRAY = (40, 40, 40)
        self.WHITE = (255, 255, 255)
        
        # for snake
        self.UP = "up"
        self.DOWN = "down"
        self.RIGHT = "right"
        self.LEFT = "left"
        self.HEAD = 0
        
        self.x = random.randint(5, self.CELLWIDTH - 6)
        self.y = random.randint(5, self.CELLHEIGHT - 6)
        
        self.direction = self.RIGHT
        
        self.worm_coords = [
            {'x': self.x,     'y': self.y},
            {'x': self.x - 1,     'y': self.y},
            {'x': self.x - 2,     'y': self.y},
        ]

        # initializing windows

        self.screen = pygame.display.set_mode((self.WINDOW_WIDTH, self.WINDOW_HEIGHT))
        pygame.display.set_caption("SNAKE-GAME")
        self.clock = pygame.time.Clock()

    # draw grid goes here    
    def draw_grid(self):
        for x in range(0, self.WINDOW_WIDTH, self.CELLSIZE): # draw vertical lines
            pygame.draw.line(self.screen, self.DARKGRAY, (x, 0), (x, self.WINDOW_HEIGHT))
            
        for y in range(0, self.WINDOW_HEIGHT, self.CELLSIZE): # draw horizontal lines
            pygame.draw.line(self.screen, self.DARKGRAY,(0, y), (self.WINDOW_WIDTH, y))
    

    def draw_snake(self):
        x = self.CELLSIZE * 2
        y = self.CELLSIZE * 2
        width_snake = self.CELLSIZE
        height_snake = self.CELLSIZE
        
        start_draw = pygame.Rect(x, y, width_snake, height_snake)
        
        pygame.draw.rect(self.screen, self.GREEN, start_draw)

    def draw_food(self):
        x = self.CELLSIZE * 7
        y = self.CELLSIZE * 7
        food_width = self.CELLSIZE
        food_height = self.CELLSIZE
        
        draw_snake_food = pygame.Rect(x, y, food_width, food_height)
        
        pygame.draw.rect(self.screen, self.RED, draw_snake_food)

    def draw(self):
        self.screen.fill(self.BLACK)
        # call functions
        self.draw_grid()
        self.draw_snake()
        self.draw_food()
        
        
        pygame.display.update()
        self.clock.tick(self.FPS)
    
    
    def set_new_location(self):
        self.x = random.randint(0, self.CELLWIDTH)
        self.y = random.randint(0, self.CELLHEIGHT)
        
    def update(self):
        if self.worm_coords[self.HEAD]['x'] == self.x and self.worm_coords[self.HEAD]['y'] == self.y:
            self.set_new_location()      
        else:
            del self.worm_coords[-1]
            
        
        if self.direction == self.UP:
            new_head = {'x': self.worm_coords[self.HEAD]['x'], 'y': self.worm_coords[self.HEAD]['y'] - 1}
            
        elif self.direction == self.DOWN:
            new_head = {'x': self.worm_coords[self.HEAD]['x'],  'y': self.worm_coords[self.HEAD]['y'] + 1}
            
        elif self.direction == self.RIGHT:
            new_head = {'x': self.worm_coords[self.HEAD]['x'] + 1, 'y': self.worm_coords[self.HEAD]['y']}
            
        elif self.direction == self.LEFT:
            new_head = {'x': self.worm_coords[self.HEAD]['x'] - 1, 'y': self.worm_coords[self.HEAD]['y']}
            
            
        self.worm_coords.insert(0, new_head)
        
        
    def handle_events(self, event):
        if event.key == pygame.K_LEFT and self.direction != self.RIGHT:
            self.direction = self.LEFT
        elif event.key == pygame.K_RIGHT and self.direction != self.LEFT:
            self.direction = self.RIGHT
        elif event.key == pygame.K_UP and self.direction != self.DOWN:
            self.direction = self.UP
        elif event.key == pygame.K_DOWN and self.direction != self.UP:
            self.direction = self.DOWN
        elif event.key == pygame.K_ESCAPE:
            pygame.quit()
            
        
        
        
        
        
            

    def execute_code(self):
        self.game_loop()
        

    def game_loop(self):
        while True:
            self.draw()
            self.update()
            for event in pygame.event.get():
                if event.type == pygame.QUIT:
                    pygame.quit()
                elif event.type == pygame.KEYDOWN:
                    # call directions functions
                    self.handle_events(event)
                    # call draw functions
                # self.draw()


def main():
    game = Game()
    game.execute_code()


if __name__ == "__main__":
    main()
