# 1
# import sys

# if __name__ == "__main__":
#     for argument in sys.argv:
#         print("Received ->", argument)

# 2
# user_input = input("Digite uma mensagem:")
# print("O valor recebido foi:", user_input)

# 3
import sys


err = "Arquivo não encontrado"
print(f"Erro aconteceu: {err}", file=sys.stderr)
