"use strict";


// 1. isHometown

// Define your function here
function isHometown(town) {
    if (town === 'San Francisco') {
        return true;
    } return false;
}

// 2. getFullName

// Define your function here

const getFullName = (firstname, lastname) => `${firstname} ${lastname}`;


// 3. calculateTotal

// Define your function here

function calculateTotal(baseprice, state, tax=0.05){
    let subtotal = baseprice * (1 + tax);

    let fee = 0
    if (state === "CA"){
        fee = 0.03 * subtotal;
    } else if (state === "PA"){
        fee = 2;
    } else if (state === "MA"){
        if (baseprice <= 100){
            fee = 1;
        } else {
            fee = 3;
        }
    }

    return subtotal + fee;
}
