#  1
# nome = input("Informe seu nome:")

# for letter in nome:
#     print(letter)


# 2
# number = input("Insira valores aqui, separados por espaço:")

# number_arr = number.split()

# sum = 0

# for num in number_arr:
#     if not num.isdigit():
#         print(f"Error ao somar valores, {num} não é um dígito")
#     else:
#         sum += int(num)

# print(f"A soma dos valores válidos é: {sum}")


recovery_students = []

with open("arquivo.txt") as grades_file:
    for line in grades_file:
        student_grade = line
        student_grade = student_grade.split(" ")
        if int(student_grade[1]) < 6:
            recovery_students.append(student_grade[0])

with open("recuStudents.txt", mode="w") as recu_students:
    print(recovery_students)
    recu_students.writelines(recovery_students)
