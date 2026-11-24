// for ต้องใช้ index 

for (let i = 0; i <  5 ; i++) {
    console.log(i)
}


const fruits = ["appll" , "banana" , "mango" , 10];
for (const fruit of fruits  ) {
    console.log(fruit)
}

const numbers = [1,4,6,8,6,9];
for (const number of numbers) {
    console.log(number)
}


let money = 100; 
while(money >= 30) {
    money -= 40;
}
console.log(money);

for (let i = 1 ; i <= 10 ; i++) {
    if (i % 2 === 0) continue;
    if (i >= 7 ) break; 
    console.log("banana: " , i);
}

for (i = 10 ; i >= 1 ; i--) { 
    console.log(i);
}

const names = ["Ann" , "Ben" , "Cat"];

for (const name of names) {
    console.log('สวัสดี :', name)
}


let value = 1;
let count = 0;

while(value <= 1000) {
value *= 2;
count++;
}
console.log(count);

let i = 0;

while (i<=50) {
    i++
    if (i % 7 !== 0) continue;
    console.log(i);
}

const nums = [4,8,15,16,23,42];

for (const num of nums ) {
    if (num % 2 === 0) continue;
    console.log(num) ;
    break;
}