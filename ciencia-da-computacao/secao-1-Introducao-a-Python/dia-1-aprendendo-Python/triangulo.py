def triangulo(a, b, c):
    is_triangle = a + b > c and b + c > a and a + c > b

    if not is_triangle:
        return "Não é triângulo"
    elif a == b == c:
        return "equilátero"
    elif a == b or b == c or a == c:
        return "isósceles"
    else:
        return "escaleno"


print(triangulo(2, 8, 8))
