def main():
    yell(
        [
            "Albert",
            "and",
            "Divine",
            "are",
            "heading",
            "towards",
            "their",
            "house",
            "now!",
        ]
    )
    yell2({"Albert": "and", "Divine": "are", "heading": "towards", "their": "house"})
    yell3(
        "Albert", "and", "Divine", "are", "heading", "towards", "their", "house", "now!"
    )
    yell4(
        "Albert", "and", "Divine", "are", "heading", "towards", "their", "house", "now!"
    )
    yell5(
        "Albert", "and", "Divine", "are", "heading", "towards", "their", "house", "now!"
    )


# def yell(phrase):
#     print(phrase.upper())


def yell(words):
    student = []

    for word in words:
        student.append(word.upper())

    print(student)
    print(*student)


def yell2(keywords):
    keys = []

    for keyword in keywords:
        keys.append(keyword.upper())

    print(*keys)


def yell3(*words):  # pass as many words you want ** used to remove the dictionaries
    student = []

    for word in words:
        student.append(word.upper())

    print(*student)  # to remove the list


# Using map funtion here!
def yell4(*words):
    uppercase = map(str, words)
    print(*uppercase)


# Using list comprehension functions here

def yell5(*words):
    # uppercase = [word for word in words]
    uppercase = []
    for word in words:
        uppercase.append(word)
    print(*uppercase)


if __name__ == "__main__":
    main()
