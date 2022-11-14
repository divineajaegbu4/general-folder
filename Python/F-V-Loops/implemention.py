# def main_one():
#     # working with Object here
#     student = [
#         {
#             "name": "bugger",
#             "image": "🍔"
#         },
        
#           {
#             "name": "Apple",
#             "image": "🍏"
#         },
          
#         {
#             "name": "pineapple",
#             "image": "🍍"
#         },
            
#         {
#             "name": "tomatoes",
#             "image": "🍅"
#         },
        
#           {
#             "name": "watermelon",
#             "image": "🍉"
#         }
#     ]
    
#     score_x = int(input("What's x?"))
#     score_y = round(float(input("What's y?")))
    
#     print(studen["image"])
    
#    def main_two():
#        for i in student:
#            print(i["image"])
           
#    def main_three():
#        for j in student:
#            print(j["name"])
           
#    def main_four():
#        score = 10
#        while score > 7:
#            print("Albert my love")
#            score -= 1
#     def main_five():
#         name_student = [
#             "Divine", "Albert", "shedrack", "happiness"
#             "lucky", "likely"
#         ]
        
#         for names in range(len(name_student)):
#             print(names)
            
#     def main_six():
#         if(x > y ):
#             for p in student:
#                 print(p["image"] + p["name"])
#         elif (y < x):
#             return "👇" 
#         elif (y == x):
#             return "🍊"
#         elif (x <= y):
#             return "👆"
#         else:
#             return False
    
    
#     print_fn = {
#         "first_name": main_two,
#         "second_name": main_three,
#         "third_name": main_four,
#         "fourth_name": main_five,
#         "fifth_name": main_six
#     }
    
#     return print_fn
        
        



# call_back_fn = main_one()

# print(call_back_fn)

# def main_one():
#     if(main_two()):
#         return True
#     main_three()
#     main_four()
#     main_five()
    


# def main_two():
#       student = [
#         {
#             "name": "bugger",
#             "image": "🍔"
#         },
        
#           {
#             "name": "Apple",
#             "image": "🍏"
#         },
          
#         {
#             "name": "pineapple",
#             "image": "🍍"
#         },
            
#         {
#             "name": "tomatoes",
#             "image": "🍅"
#         },
        
#           {
#             "name": "watermelon",
#             "image": "🍉"
#         }
#     ]
      
#       for i in student:
#         print(i["image"])
        


# def main_three():
#     score = 10
#     x = int(input("What's x?"))
#     y = round(float(input("What's y?")))
    
#     if x > y:
#         while score >= 7:
#             print("🍍")
#             score -= 1
#     if (y < x):
#          return "👇" 
#     if (x == y):
#          return "🍊"
#     elif (y >= x):
#          return "👆"
#     else:
#         return False
         
# def main_four():
#      name_student = [
#              "Divine", "Albert", "shedrack", "happiness",
#              "lucky", "likely"
#         ]
     
      
#      if len(name_student) == 6:
#            for list in name_student:
#              print(list)
         
#     #  if len(name_student) == 6:
      

# def main_five():
  
#     dic_names = {
#         "first_name": "Divine",
#         "second_name": "Albert",
#         "third_name": "lovely",
#         "fourth_name": "prestige",
#         "fifth_name": "Assurance",
#         "six_name": "pros",
#     }
    
#     for names in dic_names:
#         print(dic_names[names])
        

# main_one()


#Exceptions unit test
# from random import choice
# from sys import argv
# from statistics import mean
# from random import randint
# from cowsay import trex
# from cowsay import cow
# # from requests import get
# import requests

# def exceptions():
#     try_exceptions()
#     random()
#     statistics()
#     randints()
#     # sys()
#     cowsays()
#     request_url()
    
    
# def try_exceptions():
#         while True:
#             try:
#                 x  = round(float(input("What's x?")))
#                 print(f"{x}")
#             except ValueError:
#                 pass
#             else:
#                 break
            

        
# def random():
#         sides = choice(["Albert", "Ukaegbu", "Divine", "Ezinne"])
#         print(sides)
        

    
# def statistics():
#         direction = mean([1, 10])
#         print(direction)

    
# def randints():
#         numbers = randint(2, 8)
#         print(numbers)

# # def sys():
# #         if len(argv) == 2:
# #             look_len = argv[1]
# #             for i in look_len:
# #                 exit(i)
# #         elif len(argv) == 3:
# #             numbers_three = argv[1:]
# #             for o in range(len(numbers_three)):
# #                 exit(o)
# #         elif len(argv) < 5:
# #             numbers_five = argv[1: 4]
# #             for x in numbers_five:
# #                 exit(x)
# #         else:
# #             return "That's all"
            

    
# def  cowsays():
#         if len(argv) == 2:
#             structure = cow("Albert, " + argv[1])
#             print(structure)
#         elif len(argv) > 3:
#            building =  trex("Albert, Divine, " + argv[2])
#            print(building)
            

    
# def request_url():
    
#         # response = requests.get("https://www.geeksforgeeks.org/python-program-to-convert-a-list-to-string/?ref=leftbar-rightbar")
#         # print(response)
#         # return response.request
#         import json

#         response = requests.get("https://itunes.apple.com/search?entity=song&limit=1&term=weezer")
# # response = requests.get("https://www.youtube.com/watch?v=hpxHkOG6Nyg&list=PPSV")
# # print(json.dumps(response.json(), indent=4))
#         o = response.json()

#         for i in o["results"]:
#             print(i["trackName"])
#             print(i["trackNumber"])
    
#         print(response.request)
#         print(response)
        

            
# #     call_fn_general = {
# #         "first_name_call": try_exceptions,
# #         "second_name_call": random,
# #         "third_name_call": statistics,
# #         "fourth_name_call": randints,
# #         "fifth_name_call": sys,
# #         "sixth_name_call": cowsays,
# #         "seventh_name_call": request_url,
# #     }
    
# #     return call_fn_general



# exceptions()

# print(execution_fn["first_name"])

          
          
    
    
from sys import argv
from random import choice, randint, shuffle
from statistics import mean
from cowsay import cow, trex
import requests




def form():
    form_sys()
    modules_random_choice("Albert", "Divine", "happiness")
    modules_random_randint()
    modules_statistics_mean(2, 9)
    modules_cowsay_cow()
    modules_random_shuffle()
    # modules_fn()
    # modules_requests_get()

    
    
    
    
def form_sys():
    while True:
        try:
            if len(argv) == 1:
                x = int(input("What's x?"))
                print(x, argv[0])
        
            elif len(argv) == 3:
                y = round(float(input("What's y?")))
                print (y, argv[1:])
            else:
                print("Evaluate anyone u want")
        except ValueError:
            pass
        
        else:
            break
        
        
        
#for random choice
def modules_random_choice(input, output, call_back):
    names = (input, output, call_back)
    insert_names  = choice(names)
    
    print(insert_names)
    
    


#for random randint

def modules_random_randint():
    name = ["first_name", "second_name", "third_name"]
    
    if len(name) > 1:
        x = randint(19, 20)
        print(x)
    elif len(name) == 3:
        y = randint(0, 2)
        print(y)
    elif len(name) <= 2:
        print("Hello, world!")
    else: 
        print("Albert, Divine")
        
        
#statistics for mean
def modules_statistics_mean(num1, num2):
    numbers = (num1, num2)
    
    total_numbers = mean(numbers)
    
    numbers = (num1, num2)
    
    total_numbers = mean(numbers)
    
    print(total_numbers)
    
    
#for cowsay

def modules_cowsay_cow():
    fruits = [
        # {
        #  "name": "🍏"
        # },
        
        {
          "image": "🍅"
        }
    ]
    
   
    for modules in fruits:
        modules_cowsay = modules["image"]
        
        if len(modules) == 1:
            return(cow("divine' " + modules_cowsay), trex("Albert, " + modules_cowsay))
        # return (trex(modules_cowsay))
        print(modules)
    
     
     
     
#shuffle

      
def modules_random_shuffle():
    if len(argv) == 1:
        decision = (["love", "success", "prosperity"])
        shuffle(decision)
        
        for v in decision:
            print(v)
            
            
# def modules_requests_get():
#     response = requests.get("https://itunes.apple.com/search?entity=song&limit=1&term=weezer")
#     print(response)
#     print(response.request)
    

#general_fn
def modules_fn(name):
    x = int(input("What's the value of x?"))
    # print(f"{name} {x}")
    print(x * name)

    
form()