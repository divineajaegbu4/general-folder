#Working with OOP HERE


# name = input("Name:")
# house = input("House:")

# print(f"{name} from {house}")


# def main():
#     # name = get_name()
#     # house = get_house()

#     # name, house = get_student()

#     #tuple(immutability) versus list(mutability)
#     student = get_student()

#     # if student[0] == "Divine":
#     #     student[1] = "Albert"

#     if student["name"] == "Divine":
#         student["house"] = "Lagos"
#     print(f'{student["name"]} from {student["house"]}')

# # def get_name():
# #     return input("Name:")


# # def get_house():
# #     return input("House:")

# def get_student():

#     # student = {}
#     # student["name"] = input("Name:")
#     # student["house"] = input("House:")

#     name = input("Name:")
#     house = input("House:")


#     return {"name": name, "house": house}


# if __name__ == "__main__":
#     main()

# class Student:


# def main():
#     names = get_names()

#     # if names["name"] or names["house"] or names["country"] == "Divine":
#     #     names["country"] = "Nigeria"
#     #     names["house"] = "Lagos"

#     print(f"{names['name']}, Am from {names['house']} {names['country']}")
#     # print(f"{names[0]}, Am from {names[1]} {names[2]}")


# def get_names():
#     # name = input("Name:")
#     # house = input("House:")
#     # country = input("Country:")
#     # student = {"name": name, "house": house, "country": country}
#     # student = []

#     # student[0] = input("Name:")
#     # student[1] = input("House:")
#     # student[2] = input("Country:")

#     student = {}

#     student["name"] = input("Name:")
#     student["house"] = input("House:")
#     student["country"] = input("Country:")

#     return student




# class Student():
#   def main(self):
#     names = self.get_names()

#     print(f"{names.name} from {names.house} {names.country}")

#   def get_names(self):
#     student = Student()

#     student.name = input("Name:")
#     student.house = input("house")
#     student.country = input("country")

#     return student

#   if __name__ == "__main__":
#     test = Student()

class Student:

  def __init__(self, name, house):
      # if not name:
      #   raise ValueError("Missing name")
      # if house not in ["Gryffindor", "happiness"]:
      #   raise ValueError("Invalid house")
      self.n = name
      self.h = house

  def __str__(self):
    return f"{self.n} from {self.h}"
    # return "a student"

  @property
  def houses(self):
    return self._houses

  @houses.setter
  def houses(self, house):
    if house not in ["divine", "Lagos", "Abuja", "Sokoto"]:
      raise ValueError("Valid house")
    self._houses = house



#call the class function
def main():
  student = get_student()
  # student.house = "Divine is heading towards market now to buy somethings"
  # print(f"{student.n} from {student.h}")
  # print(f"{student.n} from {student.h} and {student.house} and {student}")
  print(student)


def get_student():
  name = input("Name:")
  house = input("House:")
  return Student(name, house)

if __name__ == "__main__":
  main()



