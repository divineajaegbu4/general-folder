"""
Prints mario' height.
"""

from re import L


def main():
    height = int(input("What's your height?"))
    num(height)


def num(n):
    for i in range(n):
        print((i + 1), end="@")
        print("#" * (i + 1))


if __name__ == "__main__":
    main()
