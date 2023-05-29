def posto(litros, combustível):
    if combustível == "A":
        if 0 < litros < 20:
            return litros * 1.90 * (1 - 0.3)
        else:
            return litros * 1.90 * 0.5
    else:
        if 0 < litros < 20:
            return litros * 2.50 * (1 - 0.4)
        else:
            return litros * 2.50 * (1 - 0.6)
