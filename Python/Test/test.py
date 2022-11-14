from evaluate import hello

def examine():
    test_string()
    test_empty_string()
    
def test_string():
   assert hello("Divine") == "hello, Divine"
   
def test_empty_string():
   assert hello() == "hello, world"

# def main():
    
#     test_positive()
#     test_negative()
#     test_zero()
    
    
    
# def test_positive():
#     assert addition(3) == 6
#     assert addition(2) == 4
    
# def test_negative():
#     assert addition(-2) == -4
#     assert addition(-3) == -6
    
# def test_zero():
#     assert addition(0) == 0
    # assert addition(0) == -0
    # if addition(3) == 3:
    #     print("A")
    # elif addition(2) == 4:
    #     print("B")
    # elif addition(-3) == 2:
    #     print("C")
    # else:
    #     print("D")
    
    
# main()

# def main():
#     call_fn()
    


# def call_fn():
    # if addition(4) == 8:
    #     print("A")
    # elif addition(3) == 2:
    #     print("B")
    # else:
    #     print("C")
    
    # try:
    #     assert addition(2) == 4
        
    # except AssertionError:
    #     print("Error occur")
    
    
    # try:
    #     assert addition(2) == 8
        
    # except AssertionError:
    #     print("2 is not 8")
# assert addition(2) == 2
# assert addition(3) == 6

        
        
# if __name__ == "__main__":
#     main()