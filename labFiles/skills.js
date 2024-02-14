function calculateNumbers(var1, var2){
    return var1 + var2;
}

// A function that calculates the price of a vehicle based on gas mileage, year and number of miles driven.
function calculatePrice(gasMileage, year, milesDriven){
    var price = 10000;
    if(gasMileage < 15){
        price = price + 5000;
    }
    if(year < 2000){
        price = price - 5000;
    }
    if(milesDriven > 100000){
        price = price - 5000;
    }
    return price;
}

function calculatePrice(gasMileage, year, milesDriven){
    var price = 10000;
    if(gasMileage < 15){
        price = price + 5000;
    }
    if(year < 2000){
        price = price - 5000;
    }
    if(milesDriven > 100000){
        price = price - 5000;
    }
    return price;
}