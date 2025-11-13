'use strict';

function compare(obj1, obj2){

    for (let key in obj2){

        if (obj1[key] !== obj2[key]) {
            return false;
        }

    }

    return true;

}
