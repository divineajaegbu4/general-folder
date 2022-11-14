from re import search, sub, IGNORECASE


email = input("What's your email?")

secure_email = email.split("@")
if secure_email:
    print("Valid email")
else:
    print("Invalid email")


#Using library called re and module called search

# if search("^[^@]+@[^@]+\.com$", email):
# if search("^[a-zA-Z0-9_]+@[a-zA-Z0-9_]+\.com\$", email):
if search("^\w+@(?:\w+\.)?\.com\$", email):
    print("My Valid email")
else:
    print("My Invalid email")


twitter = input("URL: What's your url?")


# address = twitter.replace("https://twitter.com/", "")
# address = sub("https://twitter.com/", "", twitter)

# matches = search("^(?:\w+)?https://(?:www\.)?twitter\.com/(\w+)\$", twitter)

if matches:=search("^(?:\w+)?https://(?:www\.)?twitter\.com/(\w+)\$", twitter, IGNORECASE):
    print(f"Username:{matches.group(1)}")


