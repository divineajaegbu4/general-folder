from re import search, IGNORECASE, match, fullmatch

email = input("What's your email?")
password = input("What's your password?")
#it means that we have @ and .com in our email or it includes in our email
# if "@" in email and "." in email:
#     print("Valid")
# else:
#     print("Invalid")
    
# #you can also do it like this

# #split is used to show that these items is includes or follows
# username, domain = email.split("@")


# if username and "gmail" in domain and domain.endswith(".com"):
#     print("This is Valid")
    
# else:
#     print("This is Invaild")
    
    
#Using re library here
 
# if search("^[a-zA-Z0-9&()-]+![a-zA-Z0-9&()-]+\.*\$", password):
# if search("^[a-zA-Z0-9+]+![a-zA-Z0-9+]+\.y$", password):
if search("^\w+!(\w+\.)?\w+\.(net|edu|org)\$", password, IGNORECASE):
# if search("^\w+@\w+\.\w+\.edu$", password):
# if search("^\w+#\w+\.\w+\.(net|edu|csv)\$", password, IGNORECASE):
    print("Valid Password")
else:
    print("Invalid Password")
    
# if search("^.+@.+\.com$", email):
# if search("^[^@]+@[^@]+\.com\$", email):
if search("^[a-zA-Z0-9_]+@[a-zA-Z0-9_]+\.com$", email):
    print("Hello, this is Valid")
else:
    print("Hello, this is Invalid")

#IGNORECASE means when you write the password with uppercase but everything you write is correct the IGNORECASE will solve the problem to the normal solution
#(\w+\.)? if i remove the parathensis it means only the dot is optional but if don't remove the parathensis it means all of them is optional
#? the question mark is showing that the character is optional. optional means you can use it you cannot use it.
#\s is for whitespace 
#\w| contains numbers, underscores and alphabet characters or word characters
#[a-zA-Z0-9_] it means that all those character will be added.
#[abc]: it means to add abc
#[^@] @ [^@]: it means to add other character except @ inside it but only @outside
#..* @ ..*  and .{1}.* @ .* is almost the same as .+ @ .+
#^.+@.+\.com\$: it means matches the start of the string and left string @ and rightstring
#ought to endswith .com  \$ ought to put $ sign before it works 

# import re

# email = input("What's your email?").strip()

# if re.search(".+@.+\.edu", email):
#     print("Valid")
# else:
#     print("Invalid")
