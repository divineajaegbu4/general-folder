from ast import Name


def text(name):
    name = input("What's your name?")
    print(f"my Name is {name.title().strip()}")
    
    
text("Divine")


class_name = input("What's your name of your class?")

class_name = class_name.strip()
print("Hello,", end="")
print(class_name)

print("hello, 'class'")

def calculator():
    x = int(input("What's x?"))
    z = round(float(input("What's z?")))
    y = int(input("What's y?"))
    
    total = x + z + y * 2
    
    # total = round(x / z, 3)#round to 3 decimal places
    print(f"{total:,}")
    # print(f"{total:.2f}")#round to 2 decimal places
    
calculator()


def main(priority):
    print(f"hello, {priority}")
    
name  = input("What's your name?")
name = name.strip().title()

main(name)


def self_contained():
    x = input("What's the value of x?")
    print("x is", squared(int(x)))
    
    
def squared(y):
    # return y * y
    # return pow(y, 2)
    return y ** 2

self_contained()


def calculate():
    x = int(input("What's the value of x statement?"))
    y = int(input("What's the value of y statement?"))
    
    if x > y or x >= y:
        print("x is greater than y")
    elif x < y or x == y:
        print("x is less than y")
    # elif x == y:
    #     print("x is equal to y")
    # else:
    #     print("x greater than, less than and equal to y")
              
calculate()











# Using closure with Python

def general_fn():
    name_x = int(input("What's x?"))
    name_y = int(input("What's y?"))
    
    if name_x >= name_y or name_y <= name_x:
        return True
    elif name_y == name_y and name_y <= name_x:
        return False
    else:
        return "Don't know the values"


def item_fn():
    first_name = input("Write your first_name")
    last_name = input("Write your last_name")
    
    
    total_names = f"{first_name.strip().title()}  {last_name.strip().title()}"
    
    return (total_names)
    
    
print(item_fn())


def child_fn():
    calculate_integers = round(float(input("What's x again?")))
    calculate_integers2 = int(input("What's y again?"))
    
    calculate_both = calculate_integers +  calculate_integers2
    return (f"{calculate_both}")






print(child_fn())








print(general_fn())



i = 1
calc = 5

while i <= 3:
    print("Print out ur works")
    i += 1

# Another while loop

while calc <= 10:
    print("This is my calc functions")
    calc += 1
    
while calc != 4:
    print("Hello, world!")
    calc -= 1
    
for v in range(2):#range is a function
    print("side by side")
for x in [0,1,2,3]:#this is a List
    print("LUCKY")
    
# print("look upn" * 3, end="")
    
while True:
    n = int(input("What's n"))
    if n > 0:
        break
    
for _  in range(n):
    print("great")
    
#Working width functions

def main():
#    x  =  lonely(y)
   
   number = get_numbers()
   lonely(5)
   


    
def lonely(n):
    for _ in range(n):
        print("view source")
   

def get_numbers() :
    while True:
        v = int(input("what's the value of v?"))
        if v > 0:
            break
        return v
    
main() 
    
    
    
print("love Albert")



#Practicals

#loops with functions, variables 
def express_way():
    score = 10
    loop = 10
    if(is_integer()):
        while score >= 7:
            print("My new ways!")
            
            score -= 1
    if(is_true_integer()):
        
        for i in range(loop):
            print("My Albert is learning programming")
    if(True):
        print("Am alone oo!!")       
            
def is_integer():
    return True

def  is_true_integer():
    if(True):
        return "were are u going"


express_way()


# List - for javascript called (Arrays)
student = ["first_student", "second_student", "third_student"]

for i in range(len(student)):
    print(i + 1, student[i])
print(student)
print(student[0])
print(student[1])
print(student[2])


#dictionaries - for javascript called (Object)


new_students = {
    'first_name': "Ajax",
     'second_name': "Albert",
     'marital_status': "single",
     'occupation': "developer or software engineer"
}

print(new_students)

# loop to print out the value and both value and keys

for i in new_students:
    print(f"{i}, {new_students[i]}")
    
    
general_students = [
    {
        "name": "styles",
        "image": "🍍",
        
    },
    
     {
        "name": "Divine",
        "image": "🍊",
        
    },
     
      {
        "name": "Albert",
        "image": "🍉",
        
    },
      
       {
        "name": "Happiness",
        "image": "🍏",
        
    },
       
        {
        "name": "Shedrack",
        "image": "🍔",
        
    }
]


for create_var in general_students:
    print(create_var["image"],"fruits", create_var["name"],"fruits_name",  sep=", ")

def expected():
    indented_rolls(3)   
    
def indented_rolls(height):
    for i in range(height):
        print("🍅" * height)#rows
        print("🍔")#columns
    
expected()



#importation
# def clones(name):
#     print(f"hello, {name}")