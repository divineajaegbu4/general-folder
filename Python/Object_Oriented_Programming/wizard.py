class Student:
     def __init__(self, name):
          self.name = name
          
          print(self.name)
class Student2(Student):
     def __init__(self, name, fname):
          super().__init__(name)
          self.fname = fname
        
          print(self.fname, "and", self.name)
          
Student("Divine")

Student2("Ukaegbu", "Albert")


class Operators:
     def __init__(self, gallons, sickles, lones):
          self.gallons = gallons
          self.sickles = sickles
          self.lones = lones
     
     
     def __str__(self):
          call = f"{self.gallons} gallons, {self.sickles} sickles, {self.lones} lones"
          return call
     
     def __add__(self, other):
          first = self.gallons +  other.gallons
          second = self.sickles + other.sickles
          third = self.lones + other.lones
          
          return Operators(first, second, third)
          
     
     
     
form1 = Operators(234,54,2)
form2 = Operators(12, 45, 67)
likes = form1 + form2
print(likes)
print(form1)
print(form2)