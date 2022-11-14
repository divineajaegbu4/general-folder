def unpack(gallons, sickles, knuts):
    return (gallons * 4 + sickles) * 67 + knuts



coins = [100, 50,  30]
sections = {"gallons": 100, "sickles":50, "knuts":30}




# print(unpack(*coins), "Knuts")
# print(unpack(coins[0], coins[1], coins[2]), "knuts")
# print(unpack(sections["gallons"], sections["sickles"],  sections["knuts"]), "Knuts")
print(unpack(**sections), "Knuts")
# lines.append(sections["gallons"], sections["sickles"], sections["knuts"])


lines = set()
# lines = []
look = {
    "name": "Divine",
    "lname": "Albert"
}

lines.add(look["name"])
# lines.append(look["lname"])

for v in lines:
    print(v)
    
    
    
def f(*args, **kwargs):
    print("Named:",  kwargs)
    print("Positional:", args)
    
f(first=20, second=34, third=87)
f(12, 56, 78)