from general_test import test_conditional


def main():
    group1()
    group2()
    group3()
    group4()
    group4()
    # group1()
    
def group1():
    assert test_conditional(10) == 98

def group2():
    assert test_conditional(5) == 8
    
def group3():
    assert test_conditional(2) == 2

def group4():
    assert test_conditional(3) == 7

def group5():
    assert test_conditional(4) == 6
    
if __name__ == '__main__':
    main()