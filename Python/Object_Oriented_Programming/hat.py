from random import choice

class Hat:
    def __init__(self):
        self.houses = ["duplex", "london", "Africa"]
        
    houses = ["duplex", "london", "Africa"]
       
        
        
        

    def solve(self, name):
        self.name = name
        house = choice(self.houses)
        
        return f"{self.name} is a good girl {house}"
    
    @classmethod
    def hat(cls, group):
        return f"{group, cls.houses}"
    
    
    
    
    
hat = Hat()

print(hat.solve("Divine"))
print(Hat.hat("people"))
