def maiorNome(arr):
    nome = ""
    for name in arr:
        if len(name) > len(nome):
            nome = name
    return nome


print(maiorNome(["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"]))
