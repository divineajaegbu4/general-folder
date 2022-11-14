# def main():
#     x = addition(3)
#     print(f"this is x {x}")
    
    

# def addition(n):
#     return n + n


# if __name__ == "__main__":
#     main()
    
    
def main():
    name = input("What's your name?")
    output = hello(name)
    print(output)
    
    
def hello(to="world"):
    return f"hello, {to}"
    
    
if __name__ == "__main__":
    main()