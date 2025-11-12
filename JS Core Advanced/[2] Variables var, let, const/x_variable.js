'use strict';

function foo(){
    {
        var x = 'var';
        let y = 'let';
        const z = 'const';
        
        console.log(x);//вывелaсь
        console.log(y);//вывелaсь
        console.log(z);//вывелaсь
    }

    console.log(x);//видна снаружи блока, вывелась
    console.log(y);//не видна снаружи блока, не вывелась (ReferenceError: y is not defined)
    console.log(z);//не видна снаружи блока, не вывелась (ReferenceError: z is not defined)
}

foo();

