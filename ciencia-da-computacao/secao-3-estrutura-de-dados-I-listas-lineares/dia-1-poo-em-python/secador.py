from eletrodomestico import Eletrodomestico


class Secador(Eletrodomestico):
    pass


class Batedeira(Eletrodomestico):
    pass


class MaquinaDeLavar(Eletrodomestico):
    pass


secador = Secador("Branco", potencia=450, tensao=110, preco=400)
batedeira = Batedeira('vermelha', potencia=500, tensao=127, preco=289)
maquina_de_lavar = MaquinaDeLavar('prata',
                                  potencia=7000, tensao=220, preco=1500)

print(f" O secador {secador.cor} custa {secador.preco}")
print(f" A batedeira {batedeira.cor} custa {batedeira.preco}")
print(f""" A máquina de lavar {maquina_de_lavar.cor}
       custa {maquina_de_lavar.preco}""")
