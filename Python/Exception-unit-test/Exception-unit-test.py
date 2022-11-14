

# try:
    
#     x = int(input("What's x?"))

#     print(f"x is {x}")

# except ValueError:
#     print("x is an integer not a string")
    

# #implementing an exceptional

# def main():
#     is_integer()
    
    
# def is_integer():
#     while True:
#         try:
#             x = int(input("What's x?"))
            
#             print(x)
#         except ValueError:
#             # print("This is not an integer")
#             pass
            
#         else:
#             break
        

# main()


# def slice():
#     y = get_int("what's y?")
#     # print(f"y is {y}")
#     return (f"y is {y}")
    
    
# def get_int(clue):
#     while True:
#         try:
#             x = int(input(clue))
            
#             print(x)
            
#         except ValueError:
#             pass
#         else:
#             break
        
        
        
# slice()


# try:
#     name_of_student = input("What's your  name?")
#     print(name_of_student)
# except like:
#     print("Not allowed")
    
    
    
    
    
    
# Working with random and it goes here....
# this is modules or libraries and you have to import them
# import random

# from random import randint

# from random import shuffle
# import statistics

# coin = random.choice(["Divine", "loop", "likes"])#working with list(Arrays)
# print(coin)

# number = randint(1, 10)
# print(number)

# cards = (["first_name","second_name","last_name"])

# shuffle(cards)

# for i in cards:
#     print(i)
    
    
    
    
# #Working with Statistics

# from statistics import mean

# statistics_mean = mean([1, 2])

# print(statistics_mean)

#Working width sys

# from sys import argv


# try:
    
#     print("my name is", argv[1:4])
# except IndexError:
#     print("Write something there!")
#     # pass
    
    
# #Working with if statement

# if len(argv) == 2:
#     print("wow!!")
# elif len(argv) < 2:
#     exit("Hello!")
# elif len(argv) > 2:
#     exit("yes oo")
# else:
#     exit("your name", argv[1])
from sys import argv
# from sys import exit
from cowsay import cow
from cowsay import trex

# from cowsay import trex

# if len(argv) == 2:
#    exit(trex("hello, " + argv[1]))
# elif len(argv) > 3:
#    exit(cow(f"Hi {argv[2:]}"))
    
# cards = [1,2,3,4,5]
# print([[cards]])
# for i in cards:

#Working with requests
import requests
import json

response = requests.get("https://itunes.apple.com/search?entity=song&limit=1&term=weezer")
# response = requests.get("https://www.youtube.com/watch?v=hpxHkOG6Nyg&list=PPSV")
# print(json.dumps(response.json(), indent=4))
o = response.json()

for i in o["results"]:
    print(i["trackName"])
    print(i["trackNumber"])
    
print(response.request)
print(response)
# if len(argv) != 2:
#     exit()
    
# response = requests.get("https://itunes.apple.com/search?entity=song&limit=1&term=weezer" + argv[1])

# print(response.json())

# from variables import clones 

# if len(argv) == 2:
#     clones(argv[1])