from re import search, sub

name = input("What's your name?").strip()

matches = search("^(.+), *(.+)\$", name)

# if matches:
if matches:= search("^(.+), *(.+)\$", name):
    name = matches.group(2) + " " + matches.group(1)
print(f"hello, {name}")
# name = input("What's your name?")
# matches = search("^.+,.+\$", name)
# if matches:
#     total_name = f"{matches.group(1)}, {matches.group(2)}"
#     print(f"Hello, {total_name}")
#     print("Hello, Valid")
# else:
#     print("Hello, Invalid")


url = input("URL:")

# username = url.replace("https://twitter.com/", "")
username = url.removeprefix("https://twitter.com/")

# username2 = search("^https?://(?:www\.)?twitter\.com/(.+)\$", url)
username2 = search("^(?:\w+)?https?://(?:www\.)?twitter\.(?:com|org)?/(\w+)$", url)

if username2:
    print(f"username2: {username2.group(1)}")
else:
    print("Invalid showing")



# if username2:= sub("https://twitter.com/", "", url):

#     print(f"username2: {username2}")
# else: 
#     print("Not replace")



print(f"username: {username}")
# print(f"username2: {username2}")

#re.sub is used for replacement
#(.+),(.+) when you put parenthesis it means you're capturing 
# * only star removes whitespace.
#:= is called Walrus operator, you can use if statement that declare a variable and assign something in it used Walrus operator(:=)