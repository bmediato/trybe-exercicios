# def multiply_arrays(array1, array2, array3):
#     result = []
#     number_of_iterations = 0

#     for number1 in array1:
#         print(f"Array 1: {number1}")
#         for number2 in array2:
#             print(f"Array 2: {number2}")
#             for number3 in array3:
#                 print(f"Array3: {number3}")
#                 result.append(number1 * number2 * number3)
#                 number_of_iterations += 1

#     print(f"{number_of_iterations} iterações!")
#     return result


# meu_array = list(range(1, 100))

# multiply_arrays(meu_array, meu_array, meu_array)


# A estrutura deve estar ordenada para que a busca binária funcione
def binary_search(numbers, target):
    # definir os índices
    start = 0
    end = len(numbers) - 1

    while start <= end:
        # os índices podem ser no máximo iguais, o início não pode ultrapassar
        #  o fim

        mid = (start + end) // 2  # encontro o meio

        if numbers[mid] == target:
            # se o elemento do meio for o alvo, devolve a posição do meio
            return mid

        if target < numbers[mid]:  # se o elemento for menor, atualiza o
            # índice do fim
            end = mid - 1
        else:  # caso contrário, atualiza o índice do inicio
            start = mid + 1

    return -1  # Não encontrou? Retorna -1


numbers = [2, 3, 4, 10, 40]
target = 40

result = binary_search(numbers, target)
print(f"Elemento encontrado na posição: {result}")
