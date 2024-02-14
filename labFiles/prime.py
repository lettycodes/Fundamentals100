def prime(n):
    if n < 2:
        return False
    for i in range(2, n):
        if n % i == 0:
            return False
    return True

def determineWeather(temp): 
    if temp < 0:
        return "freezing"
    elif temp < 10:
        return "very cold"
    elif temp < 20:
        return "cold"
    elif temp < 30:
        return "warm"
    else:
        return "hot"