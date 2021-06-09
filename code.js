let pow_value = document.body.querySelector("#pow_value");
let pow_power = document.body.querySelector("#pow_power");
let pow_output = document.body.querySelector("#pow_output");

let gcf_value1 = document.body.querySelector("#gcf_value1");
let gcf_value2 = document.body.querySelector("#gcf_value2");
let gcf_output = document.body.querySelector("#gcf_output");

let fmd_number = document.body.querySelector("#fmd_number");
let fmd_output = document.body.querySelector("#fmd_output");

let prime_number = document.body.querySelector("#prime_number");
let prime_output = document.body.querySelector("#prime_output");

let factors_number = document.body.querySelector("#factors_number");
let factors_output = document.body.querySelector("#factors_output");

let fibo_number = document.body.querySelector("#fibo_number");
let fibo_output = document.body.querySelector("#fibo_output");

function CheckArgs(callback, ...args) {
    for (let i = 0; i < args.length; i++) {
        args[i] = parseInt(args[i]);
        if(isNaN(args[i])) return;
    }
    return callback(...args);
}

function CalculatePower() {
    let value = pow_value.value;
    let power = pow_power.value;
    pow_output.innerHTML = CheckArgs(pow, value, power)
}

function CalculateFactor() {
    let value1 = gcf_value1.value;
    let value2 = gcf_value2.value;
    gcf_output.innerHTML = CheckArgs(gcf, value1, value2)
}

function pow(value, power) {
    if(power < 0) return 1 / pow(value, power * -1);
    if(power === 0) return 1;
    return pow(value, power - 1) * value;
}

function gcf(value1, value2) {
    if(value1 < value2)
        [value2, value1] = [value1, value2]
    
    function fc(a) {
        if(value1 % a === 0 && value2 % a === 0 )
            return a;
        return fc(a - 1);
    }
    return(fc(value2));
}

function FindMaxDigit() {
    fmd_output.innerHTML = MaxDigit(fmd_number.value);
}

function MaxDigit(number) {
    function fc(n, max) {
        if(n < 0) return max;
        let num = parseInt(number[n]);
        if(num > max) max = num;
        return fc(n - 1, max)
    }
    return fc(number.length - 2, parseInt(number[number.length - 1]))
}

function CheckIsPrime() {
    prime_output.innerHTML = CheckArgs(IsPrime, prime_number.value);
}

function IsPrime(num) {
    function fc(n)
    {
        if(n === 1) return true;
        if(num % n)
            return fc(n - 1);
        return false;
    }
    return fc(num - 1);
}


function GetAllFactors() {
    factors_output.innerHTML = CheckArgs(FactorsOfNumber, factors_number.value);
}

function FactorsOfNumber(number) {
        let factor = GreatestFactor(number);
        if(factor === 1) return [number / factor];
        let arr = FactorsOfNumber(factor);
        arr.unshift(number / factor);
        return arr;
}

function GreatestFactor(number) {
    function fc(n)
    {
        if(number % n === 0) return n;
        return fc(n - 1);
    }
    return fc(number - 1);
}

function GetFibonacci() {
    fibo_output.innerHTML = CheckArgs(Fibonacci, fibo_number.value);
}

function Fibonacci(n) {
    function fc(a, b) {
        n--;
        if(n === 0) return a;
        return fc(b, a + b);
    }
    return fc(1, 1);
}