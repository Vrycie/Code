print("=== Calculator ===")
print("1 = +")
print("2 = -")
print("3 = x")
print("4 = /")
operation = int(input("Enter Operation : "))

def calc():
    num1 = int(input("First Number : "))
    num2 = int(input("Second Number : "))
    if operation == 1 :
        print(num1 + num2)
    if operation == 2 :
        print(num1 - num2)
    if operation == 3 :
        print(num1 * num2)
    if operation == 4 :
        print(num1 / num2)

if operation == 1 :
    calc()
elif operation == 2 :
    calc()
elif operation == 3 :
    calc()
elif operation == 4 :
    calc()
else :
    print("Invalid input")
