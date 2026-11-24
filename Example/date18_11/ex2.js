const products = [
    { id: "01", title: "banana", price: 4000, active: true, stock: 4 },
    { id: "02", title: "watermelon", price: 6000, active: false, stock: 5 },
    { id: "03", title: "orange", price: 1000, active: false, stock: 22 },
    { id: "04", title: "giwi", price: 10000, active: true, stock: 6 },
    { id: "05", title: "stawbary", price: 5000, active: true, stock: 10 },
]
const cart = [

    { id: "04", unit: 2 },
    { id: "01", unit: 4 },
    { id: "05", unit: 6 },
    {id: "03", unit: 4},

]
console.log("Product");

for (const p of products) {
    console.log(p);
}
console.log("Crat");

for (const c of cart) {
    console.log(c);
}

function validateCart(cart, products) {
    const error = [];

    for (let i = 0; i < cart.length; i++) {
        let found = false;

        for (let j = 0; j < products.length; j++) {
            if (products[j].id === cart[i].id) {
                found = true;
                break;
            }
        }

        if (!found) {
            error.push("ไม่พบสินค้า ID: " + cart[i].id)
        }
    }

    return error;
}

const error = validateCart(cart, products);

if (error.length > 0) {
    for (let i = 0; i < error.length; i++) {
        console.log(error[i]);
    }

} else {
    const avilable = [];

    for (let i = 0; i < products.length; i++) {
        if (products[i].stock > 0 && products[i].active) {
            avilable.push(products[i]);
        }
    }
    console.log("Avilable product");
    console.log(avilable);

    let countStock = 0;
    for (let i = 0; i < avilable.length; i++) {
        if (avilable[i].stock > 0) {
            countStock += avilable[i].stock;
        }
    }
    console.log("จำนวน stock สินค้าทั้งหมดที่มี : ", countStock);


    let maxProduct = avilable[0];
    for (let i = 1; i < avilable.length; i++) {
        if (avilable[i].price > maxProduct.price) {
            maxProduct = avilable[i];
        }
    }
    console.log("สินต้าที่มีราคาแพงที่สุด : ", maxProduct.title,(maxProduct.price / 100).toFixed(2) + " บาท");


    let totalUnit = 0;
    let totalPrice = 0;
    for (let i = 0; i < cart.length; i++) {
        for (let j = 0; j < avilable.length; j++) {
            if (avilable[j].id === cart[i].id) {
                totalUnit += cart[i].unit;
                totalPrice += avilable[j].price * cart[i].unit;
            }
        }
    }
    console.log("จำนวนสินค้าภายในตระกร้า: ", totalUnit);
    console.log("จำนวนราคาของสินค้าภายในตระกร้า: ", (totalPrice / 100).toFixed(2) + " บาท");

    const readline = require("readline/promises");
    const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
    async function findId() {
        const input = await rl.question("กรอก id เพื่อตามหาสินค้า:  ");
        const id = input.trim();
        let found = false;

        for (let i = 0; i < products.length; i++) {
            if (products[i].id == id) {
                console.log("นี่คือสินค้าที่คุณค้นหา: ", products[i].title);
                found = true;
            }
        }
        if (!found) console.log("ไม่พบสินค้า");
        rl.close();
    }
    findId();

}







