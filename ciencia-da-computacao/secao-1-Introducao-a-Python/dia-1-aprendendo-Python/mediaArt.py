def media(arr):
    sum = 0
    for number in arr:
        sum += number
    return sum / len(arr)


print(media([1, 2, 5, 7, 5]))
