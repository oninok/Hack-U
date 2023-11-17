
import random

number = ["a", "b", "c", "d"]

while True:
    selected_numbers = [random.choice(number) for _ in range(4)]
    print(*selected_numbers)
    
    if selected_numbers == ['a', 'b', 'b', 'a']:
        break
