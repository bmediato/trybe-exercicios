#  1
# nome = input("Informe seu nome:")

# for letter in nome:
#     print(letter)


number = input("Insira valores aqui, separados por espaço:")

number_arr = number.split()

sum = 0

for num in number_arr:
    if not num.isdigit():
        print(f"Error ao somar valores, {num} não é um dígito")
    else:
        sum += int(num)

print(f"A soma dos valores válidos é: {sum}")
