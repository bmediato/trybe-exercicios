class Tv:
    def __init__(self, tamanho):
        self.__volume = 50
        self.__tamanho = tamanho
        self.__canal = 1
        self.__ligada = False

    def aumentar_volume(self):
        if self.__volume < 99:
            self.__volume += 1

    def diminuir_volume(self):
        if self.__volume > 0:
            self.__volume -= 1

    def modificar_canal(self, value):
        if self.__canal <= 1 or self.__canal >= 99:
            raise ValueError('Canal indisponivel')
        self.__canal = value

    def ligar_desligar(self):
        self.__ligada = not self.__ligada
