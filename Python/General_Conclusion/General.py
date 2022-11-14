class Student:
    def __init__(self):
        self.a = 10
        
        
    def general(self):
        self.name1()
        self.enumerates()
        # self.flow()
        
        
    def name1(self):
        name = input("Name:")
        
        if name == "Divine":
            print("🥗🥗🥗🥗🥗🥗🥗")
            
    def enumerates(self):
        students = ["Divine", "Albert", "Ukaegbu"]
        
        for student, i in enumerate(students):
            print(student+1, i)
            

        
     
    
            
     
            
            
    
            
            
            
            
            
            
def main():
    call = Student()
    call.general()
    
    
if __name__ == "__main__":
    main()