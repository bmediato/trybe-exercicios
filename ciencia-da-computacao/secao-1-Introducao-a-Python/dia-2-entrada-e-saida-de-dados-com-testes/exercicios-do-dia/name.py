def getName(name):
    for removed_letters in range(len(name)):
        for index in range(len(name) - removed_letters):
            print(name[index], end="")
        print()


if __name__ == "__main__":
    name = input("Digite um nome: ")
    getName(name)
