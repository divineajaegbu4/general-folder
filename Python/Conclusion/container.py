container = [
    {
        "name": "Divine",
        "house": "Lagos"
    },
    {
        "name": "Albert",
        "house": "London"
    },
    {
        "name": "Ukaegbu",
        "house": "Enugu"
    },
    {
        "name": "Ezinne",
        "house": "American"
    }
]


counts = set()

for student in container:
    if student["house"] not in counts:
        counts.add(student['house'])
       # counts.append(student["house"])


for i in sorted(counts):
    print(i)
