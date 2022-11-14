from re import search, sub, IGNORECASE
from random import randint, choice, shuffle


class Functions:
    def __init__(self, fname):
        self.fname = fname
        self.name = input("Name:")
        self.age = input("Age:")
        self.status = input("Status:")
        # self.email = input("Email2:")
        
    def general_fn(self):
        self.forms()
        self.integers()
        self.regular_expression_search()
        self.regular_expression_sub()
    
        
    #functions for analyzation of the forms
    
    def __str__(self):
        email = input("Email:")
        
        conclusion = f"{self.name} is {self.age} years old, an she's email is {email}"
        
        return conclusion

    def forms(self):
        total = f"My name is {self.name} Am years old {self.age} and am still {self.status}"
        
        match self.name:
            case "Divine":
                print("Hi")
            case "Albert":
                print("Hello")
            case _:
                print("Nothing")
        
        return total.strip().title()
    
    def integers(self):
        x = int(input("What's x?"))
        y = round(float(input("What's y?")))
        
        if x == y:
            print("x is equal to y")
        elif x < y:
            print("x is less than y")
        else:
            print("Nothing shows")
            
        total = f"{x} and {y}"
        return total
    
    def regular_expression_search(self):
        email = input("Email2:")
        matches = search("^[^@]+@[^@]+\.com|org\$", email, IGNORECASE)
        if matches:
            print("Valid Email")
        else:
            print("Invalid Email")
         
        return matches
    
    def regular_expression_sub(self):
        URL = input("Username:")
        
        address = search("^\w+https://(?:www\.)?twitter\.com/(\w+)?\$", URL)
        
        if address:
            print("Valid address")
        else:
            print("Invalid address")
            
        return address
    
    #Using @classmethod here
    
    @classmethod
    def method(self):
        student = (["Divine", "Albert"])
        apply_choice = choice(["Divine", "Albert", "Ukaegbu"])
        apply_randint = randint(1, 5)
        
        shuffle(student)
        
        return f"choice: {apply_choice}, randint: {apply_randint}, shuffle: {student}"
        
    
    
#Using another class here!

class Inherited(Functions):
    def __init__(self,fname, lname):
        super().__init__(fname)
        self.lname = lname
        

    def execute(self):
        return f"firstName: {self.fname}, secondName: {self.lname}"
    
    @property
    def prompt(self):
        return self.lname
    
    @prompt.setter
    def prompt(self, lname):
        self.lname = lname
            
        
    
      
                
def main():
   call = Functions("Divine")
   call.general_fn() 
   print(call) 
   print(Functions.method()) 
   run = Inherited("Albert", "mylove")
   print(run.execute())
   print(run.prompt)
        
        
        
if __name__ == "__main__":
    main()
        
    
    
