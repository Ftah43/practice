'use strict'

function factorial(number){

    let res = 1;

    for (let step = 1; step <= number; step ++){
        res *= step;
    }

    return res;
}
