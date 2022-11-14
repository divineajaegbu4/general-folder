from re import search, IGNORECASE

class Testor:
    #first, initialize variables and self like this in javaScript but a hidden property
    def __init__(self, name, city, age):
        self.name = name
        self.city = city
        self.age = age
        self.email = input("Email:")
        

    def general_fn(self):
        self.test_regular_expression()
    
    def test_regular_expression(self):
    #  self.email = email
    #  self.email = input("Email:")
     while True:
        try:  
          matches = search("^[^@]+@[^@]+\.(com|edu|org)\$", self.email, IGNORECASE)

          if matches:
            print("Valid Email")
          else:
            print("Invalid Email")
        except TypeError:
            pass
        else:
            break

    # def __str__(self):
    #     return f"My name is {self.name} Am from {self.city} state"


    @property
    def test_setter(self):
        return f"My name is {self.name} Am from {self.city} state"

        # return self._names
    
    @test_setter.setter
    def test_setter(self, name):
        if test_setter not in ["Divine", "Albert"]:
            raise ValueError("Not listed")
        name, city = name

        self.name = name
        self.city = name



      



#Call the class function


def main():
    call_fn = get_forms()

    print(f"My name is {call_fn.name} Am from {call_fn.city} state and Am {call_fn.age} years old.")
    print(call_fn.general_fn())
    print(call_fn.test_setter)


def get_forms():
    
    form = {}
    # name = input("Name:")
    # city = input("City:")
    # age = input("Age:")
    form["name"] = input("Name:")
    form["city"] = input("City:")
    form["age"] = input("Age:")

    student = Testor(form["name"], form["city"], form["age"])

    return student


if __name__ == "__main__":
    main()
 
