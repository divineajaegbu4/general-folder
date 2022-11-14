from sys import argv
import argparse

# if len(argv) == 1:
#     print("Albert")
# elif len(argv) == 3 and argv[1] == "Divine":
#     number = round(float(argv[2]))
#     for _ in range(number):
#         print("Albert and Divine love")
# else:
#     print("Usage: meows.py")


class Meows:
    def __init__(self):
        self.num1 = 1
        self.num2 = 2
        self.num3 = 3
        self.num4 = 4
        
    def meows(self):
        # if len(argv) == self.num1:
        #     print("Albert")
        # elif len(argv) == self.num4 and argv[self.num1] == "Divine":
        #     number = int(argv[self.num3])
            
        #     for _ in range(number):
        #         print("Albert and Divine")
        # else:
        #     print("Usage: meows.py")
        
        match len(argv):
            case self.num1:
                print("Albert")
            case self.num3 | self.num2:
                number = int(argv[self.num2])
                
                for _ in range(number):
                    print("Albert and Divine")
            case _:
                print("Usage: meows.py")
            
            
call = Meows()

call.meows()

parser = argparse.ArgumentParser(description="run as well as cat")
parser.add_argument("-n", default=1, type=int, help="How can i help you")
args = parser.parse_args()

for _ in range(int(args.n)):
    print("meow")