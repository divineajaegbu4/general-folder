students = [
    {"name": "Divine", "house": "Lagos"},
    {"name": "Albert", "house": "Lagos"},
    {"name": "Ukaegbu", "house": "Lagos"},
    {"name": "Alberto", "house": "Gryffindors"},
]


Gryffindors = [student["name"] for student in students if student["house"] == "Lagos"]


clones = []
for student in students:
    if student["house"] == "Lagos":
        clones.append(student["name"])


def get(clones):
    return clones


for v in sorted(clones, key=get):
    print(v)


for gryffindor in sorted(Gryffindors):
    print(gryffindor)


# Using filter here


def is_griffindor(pass_string):
    return pass_string["house"] == "Lagos"


griffindors = filter(is_griffindor, students)

for griffindor in griffindors:
    print(griffindor["name"])


def seek_names(find):
    return find["house"] == "Lagos"
    # return find["name"]


griffindor = filter(seek_names, students)
# griffindor = filter(lambda s: s["house"] == "house", students)

for griffindors in sorted(griffindor, key=lambda v: v["name"]):
    print(griffindors["name"])


# Using dictionary comprehension
pupils = ["boy", "woman", "girl"]

extend = []

for pupil in pupils:
    extend.append({"name": pupils, "house": "Lagos"})

print(extend)

griffindors = {pupil: "Albert" for pupil in pupils}

for griffindor in griffindors:
    print(*griffindor.split(" "))


for i in range(len(pupils)):
    print(i + 1, pupils[i])
    
    
for i, pupil in enumerate(pupils):
    print(i + 1, pupil)