'use strict'

const fibonacci = () => {
    let fibo = [0,1];

    let i = 1
    while (fibo[i] < 350) {
        fibo.push(fibo[i]+fibo[i-1])
        i +=1
    }
    
    return fibo
}

const isPerfectSquare = (num) => {
    let x = parseInt(Math.sqrt(num));
    return x*x == num
}

const isFibonnaci = (num) => {
    if (isPerfectSquare(5*num*num + 4) || isPerfectSquare(5*num*num - 4)){
        return true;
    }
    return false
}

module.exports = {
    fibonacci,
    isFibonnaci
}
