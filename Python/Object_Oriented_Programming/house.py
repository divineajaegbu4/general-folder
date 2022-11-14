name = input("What's your name?")

# if name == "Divine" or name == "Albert" or name == "Prestige":
#     print("Hello")
# # elif name == "Albert":
# #     print("Hello")
# # elif name == "Prestige":
# #     print("Hello")
# elif name == "Onyinye":
#     print("Hi")
# else:
#     print("Happiness")


#Using (OOP) here
match name:
    case "Divine" | "Albert" | "Prestige":
        print("Hello")
    case "Onyinye":
        print("Hi")
    case _:
        print("Happiness")








#match is a switch in javaScript and switch and a bundle of if statements and case if a if statements and case underscore is else.
# match name:
#     case "Harry" | "Hermione" | "Ron":
#         print("Gryffindor")
#     case "Draco":
#         print("Syltherin")
#     case _:
#  
#        print("who?")



