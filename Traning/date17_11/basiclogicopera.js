
const kids1 = {age: 15 , height: 150};
const kids2 = {age: 10 , height: 150};
const kids3 = {age:15 , height: 130};


const kids = [kids1, kids2, kids3];

for (const kid of kids) {
    if (kid.age > 12 && kid.height > 140 )  {
        console.log(kid + "you can play ");
    } else {
        console.log(kid +  "you can't play")
    }
}