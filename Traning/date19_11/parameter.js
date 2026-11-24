function greet(name) {
    console.log(`สวัสดี ${name}`);
}
greet("aom");
greet("ploy");
greet("pigs");

function formatItem(name , qty , price) {
    return `${name} x${qty} = ${price}`;
}
console.log(formatItem("pen",2,40));