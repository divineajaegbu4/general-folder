from config import Config
import random


class Apple():
    def __init__(self):
        self.setNewLocation()
        
    def setNewLocation(self):
        self.x = random.randint(0, Config.CELLWIDTH - 1)
        self.y = random.randint(0, Config.CELLHEIGHT - 1)