
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