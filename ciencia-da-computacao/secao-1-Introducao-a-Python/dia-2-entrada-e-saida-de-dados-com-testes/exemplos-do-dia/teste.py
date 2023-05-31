# 1
# import sys

# if __name__ == "__main__":
#     for argument in sys.argv:
#         print("Received ->", argument)

# 2
# user_input = input("Digite uma mensagem:")
# print("O valor recebido foi:", user_input)

# 3
# import sys


# err = "Arquivo não encontrado"
# print(f"Erro aconteceu: {err}", file=sys.stderr)


# 4
# a, b = "cd"
# print(a)  # saída: c
# print(b)  # saída: d

# head, *tail = (
#     1,
#     2,
#     3,
# )  # Quando um * está presente no desempacotamento, os valores são
# # desempacotados em formato de lista.

# print(head)  # saída: 1
# print(tail)  # saída: [2, 3]


# while True:
#     try:
#         x = int(input("Por favor digite um número inteiro: "))
#         break
#     except ValueError:
#         # 'ValueError' é a exceção que ocorre quando a função int() recebe um
#         # valor que não pode ser traduzido para número inteiro
#         print("Oops! Esse não era um número inteiro. Tente novamente...")

try:
    with open("arquivo.txt", "r") as file:
        print(file.read())
except FileNotFoundError:
    # será executado caso haja a exceção 'FileNotFoundError'
    print("Arquivo inexistente")
else:
    # será executado se tudo ocorrer bem no try
    print("Arquivo manipulado e fechado com sucesso")
finally:
    # será sempre executado, independentemente de erro
    print("Fim da tentativa de ler o arquivo")
