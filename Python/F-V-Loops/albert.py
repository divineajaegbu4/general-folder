def main():
     x = input("what's ur name?")

     print(x)


main()
    
    
    
    
def form():
    
    first_name = input("What's ur firstName?").strip().title()
    last_name = input("What's ur lastName?").strip().title()
    location = input("What's ur location?").strip().title()
    age = input("What's ur age?").strip().title()
    complexion = input("What's ur complexion?").strip().title()
    phone_number = input("What's ur phoneNumber?").strip().title()
    
    print_out = f"my firstName is {first_name}, my lastName is {last_name}, my location is {location}, my age is {age}, my complexion is {complexion}, my phoneNumber is {phone_number}"
    
    print(print_out)
    

form()


def math(c):
    x = round(float(input("What's x?")))
    y = int(input("What's y?"))
    if(calc_math(x*c, y*c)):
        # print(f"{x} and {y}")\
            return 
        

def  calc_math(n, v):
    print(f"x: {n}, y: {v}")
    
math(10)



def general():
   print(calc())
   print(side())
    
    
    
    
def calc():
    x = int(30)
    y  = round(float(29.90876))
    return x, y


def side():
    total = (2 * 9) - 8
    return total

general()


def clone():
    x = int(input("What's the value of x?"))
    y = round(float(input("What's the value of y?")))
    
    return total_calc(x, y)


def total_calc(n, m):
    if n >= m:
        print("A")
    elif m < n:
        print("B")
    else:
        print("C")
                
clone()