from multiprocessing import parent_process
from csv import reader, DictReader, DictWriter
from sys import call_tracing

from pkg_resources import empty_provider


names = []
forms = []


#append it to the names
for i in range(3):
    x = input("What's your name?")
    
    names.append(x)
    
#print the names  
for v in names:
    print(f"hello, {v}")
    
#append it to the forms  
for x in range(4):
    y = "first", "second", "third"
    
    forms.append(y)
    
#print the forms
for p in sorted(forms):
    print(p)
    
    
def print_files():
    x = input("What's your name?")
    
    # fix = open("file.tst", "a") #a means append
    
    # fix.write(f"{x}")
    # fix.close()
    
    
    with open("name.sh", "a") as file:
        file.write(f"{x}")
print_files()


with open("name.sh") as file:
    for i in file:
        print("hello", i.rstrip())
    line = file.readlines()
    
    # for lines in line:
    #     print("hello,", line)
    
    
names = []

with open("name.sh") as file:
    for v in file:
        names.append(v.rstrip())
        
for y in sorted(names, reverse=True):
    print("hellos,", y)
    
students = []
with open("name.sh") as file:
    for expand in file:
        # print(f"{expand.rstrip()} {expand[0]} {expand[1]}")
        line = expand.rstrip().split(", ")
        students.append(line)
        print(f"{line[0]}")

class_number = {
    "name": "house", 
    "like": "people"
}
    

print(f"{class_number['name']}")



#Another example of readlines file

with open("success.pg", "r") as file:
    x = input("Do you want to append many items?")
    
    for i in x:
        file.write(f"{i}")
        
        
  
# empty_list = []


# with open("success.pg") as file:
#     reader = DictReader(file)
    
#     for row in reader:
#         empty_list.append({"name": row['name'], "house": row['house']})
#     # for x in file:
#     #     name = x.strip().split(", ")
#     #     dic_names = {"name": name}
#     #     empty_list.append(dic_names)#is like push in javascript
        
# # def value(empty_list):
# #     return empty_list['name']

       
        
# #this lambda is anonymous function, empty_list is a parenthesis and empty_list["name"] is a return value
# for y in sorted(empty_list, key=lambda empty_list: empty_list["name"], reverse=True):
#     print(f"{y['name']} is mine {y['house']}")




# open_files = []

# with open("success.pg") as file:
#     # for lines in file:
#     #     call_tracing, house = lines.strip().split(", ")
#     reader = DictReader(file)
#     for row in reader:
#         empty_provider = {"name": row["call_tracing"], "houses": row["house"]}
        
#         #then push it to the open_files
        
#         open_files.append(empty_provider)
        
#     for try_in in sorted(open_files, key= lambda open_files: open_files["name"]):
#         print(f"{try_in['name']} and {try_in['house']}")


import csv
# import pandas 

students = []


with open("success.pg") as file:
    reader = csv.DictReader(file)
    for name, home in reader:
        students.append({"name": name, "home": home})
        
for student in sorted(students, key=lambda lock: lock["name"]):
    
    print(f"{student['name']} is from {student['home']}")
    
    

# opening the CSV file
with open('Giants.csv', mode ='r')as file:
    x = input("type something")
    
  # reading the CSV file
    csvFile = csv.reader(file)
 
  # displaying the contents of the CSV file
    for lines in csvFile:
        print(lines)
        
with open('Giants.csv', 'r') as file:
    x = input("What's x?")   
    for v in x:
        print(v)

        

# opening the CSV file
# with open('Giants.csv', 'r') as file:   
        
       # reading the CSV file
# csvFile = pandas.read_csv('Giants.csv')
 
#        # displaying the contents of the CSV file
# # for lines in csvFile:
# print(csvFile)

name = input("What's your name?")
home = input("What's your home?")


with open("clone.csv", "a") as file:
    
    writer = DictWriter(file, fieldnames=["names", "homes"])
    writer.writerow({"names": name, "homes": home})
    
    
