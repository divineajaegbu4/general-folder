# #!/usr/bin/env/python3

# # print("hello", "world") ;

# # input("what is your name?")

# # print("hello, input")


# # name = input("What is your name?")
# # # print("hello,")
# # # print(name)
# # print("hello, " + name)
# # print("love, ", name)


# # print("hello, world")

# # name = input("What is your name?").strip().title();
# # # print("hello," + name)
# # # print("hello,", name)
# # # print("hello,", end="name")#end="" is a parameter 
# # # name = name.strip().title() #is used to remove whitespace
# # # name = name.title()#Writing something in upperCase and printing any first word would be capitalize
# # # name = name.capitalize()# writing something in upperCase and printing firstletter would be capitalize and others will be lowerCase
# # print(f"hello, {name}")


# loop = input("source me down")
# loop = loop.strip()
# loop = loop.title()

# print(f"Executable, {loop}")


# # for calculations

# x = 20
# y = 70;

# z = (x + y) * 3

# print(z)



# x = int(input("what's is x?"))
# y = int(input("what's is y?"))

# # z = int(x) + int(y)

# z = x + y

# print(z)




# x = float(input("what's is x?"))
# y = float(input("what's is y?"))

# # z = int(x) + int(y)

# z = x + y

# print(z)




# x = float(input("what's is x?"))
# y = float(input("what's is y?"))

# # z = int(x) + int(y)

# z = round(x / y, 2)

# print(f"{z: ,}")





# x = float(input("what's is x?"))
# y = float(input("what's is y?"))

# # z = int(x) + int(y)

# z = round(x / y)

# print(f"{z: .2f}")

# # Using function

# def greet():
#     print("hello, ", end="")

# name = input("What's your name?")
# greet()
# print(name)


# # Another function 

# def main():
#     x = int(input("What's x?"))
#     print(f"{x} squared is", square(x))


# def square(n):
#     return n*n





# main()


def slice():
    name = round(float(input("Where is your number location?")))
    name2 = round(float(input("What is your age?")))
    # name2 = name2.strip().title()
    print(f"{name}, {name2},", totalResult(name, name2))
    
    
# Another function

def totalResult(n, b):
    return n * b


slice()


def colors(a, b):
    def size(z):
        firstName = a * z
        secondName = b + z
        print(f"{firstName + secondName}")
        
        print(colors(2,4), size(2))
        
        
# if statement(conditionals or Decision)

score = int(input("score: "))


if score >= 90 and score <= 100:
    print("Grade: A")
    
elif score >= 80 and score <= 90:
    
    print("Grade: B")
    
elif score >= 70 and score < 80:
    
    print("Grade: C")

elif score >= 60 and score < 70:
    
    print("Grade: D")

else:
    print("Grade: E")
    
    
    
    
x = round(float(input("roundTo:")))
y = int(input("priority:"))

if x > y and x <= y:
    print("Answer: true")
elif x < y or x >= y:
    print("Answer: A")
else:
    print("sideEffect")