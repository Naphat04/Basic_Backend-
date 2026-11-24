// function , parameter , return , scope 


// 1 function
function add(a,b) {
    return a+b ;
}
console.log(add(5,5));

// 2.function express
const add2 = function(a,b) {
    return a+b;
};
console.log(add2(1,2));

// 3 แบบสั้น
const add3 = (a,b) => {
    return a+ b;
}
console.log(add3(1,2));

//แบบโคตรสั้น
const add4 = (a,b) => a+b;
console.log(add4(1,4));