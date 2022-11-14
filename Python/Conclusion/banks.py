class Account:
    def __init__(self):
        self._balance = 0

    @property
    def balance(self):
        return self._balance

    def deposit(self, n):
        self._balance += n

    def withdraw(self, n):
        self._balance -= n


def main():
    account = Account()
    print("Balance:", account.balance)
    account.deposit(100)
    account.withdraw(50)
    print("Balance:", account.balance)


if __name__ == "__main__":
    main()


class Cat:
    MEOWS = 5

    def meow(self):
        for _ in range(Cat.MEOWS):
            print("Albert")


cat = Cat()
cat.meow()

"""
meow in five times
"""
def meow(n: int):
    return "Albert Divine\n" * n
    # for _ in range(n):
    #     print("Albert and Divine")


number = int(input("Number: "))
print(meow(number), end="")
# print(meow(number))
