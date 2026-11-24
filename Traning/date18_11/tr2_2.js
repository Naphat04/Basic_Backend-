const aom = ["Ann", "Ben", "Cat"];

aom.push("Dan");
console.log(aom);

const remove = aom.shift();
console.log(aom , remove);

for (i = 0 ; i < aom.length ; i++ ) {
    if (aom[i] == 'Ben') {
        aom[i] = 'benned';
    }
}
console.log(aom)

const nums = [5, 12, 8, 20, 3];
const big = nums.filter((n) => n > 7);

console.log(big);


console.log(colors[0]);
console.log(colors[2]);
console.log(colors.length);
console.log(colors.length-1);
colors.at(-1)
console.log(colors[1]);
console.log(colors[0],colors.at(-1));;

for (i = 0 ; i <  colors.length ; i++ ) {
    console.log(colors[i]);
}

    for (i = 0 ; i < scores.length ; i++ ) {
        if (i % 2 === 0) {
            console.log(scores[i])
        }
    }