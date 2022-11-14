from re import search

class Student:
    def __init__(self, view, review, age, animals):
        self.view_source = view
        self.review_source = review
        self.age_view = age
        self.animal_view = animals

    # def charm(self):
    #     if self.animal_view == "cat":
    #         return "🐀"
    #     elif self.animal_view == "goat":
    #         return "🐐"
    #     elif self.animal_view == "rat":
    #         return "🐁"
    #     else:
    #         return "No animal"
    
    # def __str__(self):
    #     return f"{self.view_source} and {self.review_source}"

        

    # def test_regualar_expression(self):
    #     # self.email = email
    #     # self.address = URL

    #     return self.general_test_regular_expression("email")

    # def  general_test_regular_expression(self, email):
    #     self.email = email
    #     self.email = input("Email:")
    #     # self.address = input("URL:")

    #     matches = search("^.+@.+\.com$", self.email)

    #     if matches:
    #         return "Valid Email"
    #     else:
    #         return "Invalid Email"

    
    # @property
    # def getter(self):
    #     return self.houses

    # @setter_houses.setter
    # def setter_houses(self, house):
    #     self.houses = house
    



#call the class here
def main():
    total_names = get_names()

    print(f"{total_names.view_source} is my {total_names.review_source} and he's {total_names.age_view}years old")
    print(total_names)
    print(total_names.charm())
    print(total_names.test_regualar_expression())



def get_names():
    name = input("Name:")
    house = input("House:")
    age = input("Age:")
    animal = input("Animal:")

    student = Student(name, house, age, animal)

    return student


if __name__ == "__main__":
    main()