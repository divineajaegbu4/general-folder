from io import open_code
from pkg_resources import empty_provider
from sys import argv
from random import randint, choice, shuffle
import requests
from statistics import mean
from cowsay import cow, trex
from csv import DictReader, DictWriter, reader

def main():
    #Function, Variables
    x = input("What's your name?")
    y = int(input("What's y?"))
    print(f"About my age and my name {fn_var(x.strip().title(), y)}")
    print(fn_var2(x, y))
    print(loop_1())
    print(test_conditional(5))
    print(test_exceptions())
    print(test_libraries_sys())
    print(test_libraries_random_choice())
    print(test_libraries_random_randint())
    print(test_libraries_random_shuffle())
    print(test_request())
    print(test_mean())
    print(test_cow())
    print(test_trex())
    print(test_file_reader())
    print(test_file_DictWriter())
    
    
    
    
#for functions and variables
def fn_var(name, number):
    return name, number
   
   
def fn_var2(x, y):
    students = []
    
    x = round(float(input("What's the number of x?")))
    y = int(input("What's the number of y?"))
    
    students.append(f"total_number = {x + y/2}")#is used to push the number inside the students
    
    return students

#for conditionals

def loop_1():
    x = input("What's the number of x?")
    # count = int(input("What's number of count?"))
    
    count = 5
    
    if count == 5:
        while count < 10:
            count += 1
            print("Albert, Divine")
        else:
            print("Albert is heading towards market now!")
            
            
        #for for in loop
        
        new_students = []
        
        older = ["Divine", "Albert", "love", "Everything"]
        num = ["lovelyn", "happiness", "life"]
        
        for v in older,  num:
            new_students.append(v)
            
        def sort_out(new_students):
            return new_students
        
            
        for callout in sorted(new_students, key=sort_out):
            print(f"name: {callout} ")
    
    
def test_conditional(y = 5):
    
    if y == 5: 
        print("A")
    elif y > 2:
        print("B")
    else:
        print("C")
    
    Evaluate = (y * y - 2)
    
    return f"Answer: {Evaluate}"


def test_exceptions():
    while True:
        try:
            x = input("What's your name?")
            
            print(f"my name is: {x.strip().title()}")
            
        except ValueError:
            pass
        else:
            break
        
        
    while True:
        try:
            y = int(input("What's your age?"))
            
            print(f"my age is: {y}")
            
        except ValueError:
            pass
        else:
            break


def test_libraries_sys():
    #SYS GOES HERE
    calc = argv[1:]
    calc_list = []
    
    if len(argv) == 5:
        for v in calc:
            calc_list.append(v)
            
    def test_return_calc(calc_list):
        return calc_list
    
    for call_stack in sorted(calc_list, key=test_return_calc):
        print(f"length: {call_stack.strip().title()}")
    
    
    
def test_libraries_random_choice():
    count_list = choice(["Divine", "Albert", "Courier", "Green"])
    
    
    for x in count_list:
    
       return count_list
   
def test_libraries_random_randint():
    
    count_num = randint(2, 5)
    
    return count_num
    

def test_libraries_random_shuffle():
    
    warehouse = ["rice", "beaker", "orange", "beans"]
    shuffle(warehouse)
    
    # if len(argv) == 5:
    for v in warehouse:
        print(v)
    
    
def test_request():
    response = requests.get("https://pynative.com/python-random-shuffle/")  
    
    return response, response.request
        
        

def test_mean():
    evaluate_mean = mean([1, 5])
    
    return evaluate_mean

def test_cow():
    testor = input("What's your name?")
    
    testor = testor.strip().title()
    
    lones = cow("Hello" " " + testor)
    
    return lones

def test_trex():
    test_up = int(input("What's your age?"))
     
    evaluate_soln = test_up + 2
    
    lones = trex(f"Hi, this is my age: {evaluate_soln}")
    
    return lones

#files goes here
def test_file_reader():
    x = input("What's are name of the fruits you know?")
    with open("test.csv", "a") as file:
        
        file.write(f"{x}")
        # file.write(x\n)
        # file.close()
        
        
    
        students = []
        
    with open("test.csv") as file:
        
        prompt_file = reader(file)
            
        for x in prompt_file:
                
            show_appendship = {"name1": x}
            
            students.append(show_appendship)
            
    def test_return(students):
        return students["name1"]
    
    
    for conclusion_print in sorted(students, key=test_return):
        print(f"{conclusion_print['name1']}")
        print(conclusion_print, end=", ")
                

def test_file_DictWriter():
    name = input("What's your name?")
    age = input("What's your age?")
    
    class_details = []
    with open("test.csv") as file:
        
        DictWriter(file, fieldnames={"name", "age"})
             
        open_file_test = {"name": name, "age": age}
        
        class_details.append(open_file_test)
            
        
        return class_details
            
       
        
        

if __name__ == "__main__":
    main()
    
   



    
# count = 5

# while count < 20:
#     count += 1
#     print("Hello, world!") 
