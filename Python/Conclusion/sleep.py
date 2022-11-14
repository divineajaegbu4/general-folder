def main():
    n = int(input("What's n? "))

    for v in apple(n):
        print(v)


def apple(num):
    flocks = []

    for size in range(num):
        flocks.append("🍑" * (size + 1))

    yield flocks


if __name__ == "__main__":
    main()
