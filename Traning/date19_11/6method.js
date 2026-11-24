// map มันจะทำการเอาทุกตัวใน array ไปวน function แล้วก็ทำการ เก็บเป็น array ใหม่  return เป็น array ใหม่ จำนวนเท่าเดิม 
const numbers = [35,23,17,21];

const result = numbers.map((number) => {
  return number*2
}) 
console.log(result);

// filter ฟิลเตอร์เอาค่าใน array ออกมาตามเงืื่อนไขที่เราเขียนไว้ภายใน function  return array ใหม่เฉพาะค่าที่ผ่านเงื่อนไข
const members = [ 
   {name: "Eve", age: 24}, 
   {name: "Adam", age: 48}, 
   {name: "Chris", age: 18}, 
   {name: "Danny", age: 30}
]

const resultF = members.filter((member) => {
  return member.age > 25 
})
console.log(resultF);

//find  คล้ายๆ   filter จะหาค่าใน array ตามเงื่อนไขใน finction แรต่จะต่าก็คือ find มันเอาตัวแรกที่เจอเลย return แค่สม่ชิกตัวเดียวใน array ที่ผ่านเงื่อนไข
const resultT = members.find((member) => {
  return member.age > 25;
})
console.log(resultT);

//Every ทุกตัวภายใน array ที่ผ่าน function ต้องเป็น true ทั้งหมดไม่งั้นก็จะเป็น false คล้ายๆกับก่ารมี and && ret
const EveryResult = members.every((member) => {
  return member.age > 25
})
console.log(EveryResult); 

//some ขอแค่ตัวที่ผ่าน function นั้นเป็น true ซักตัวก็จะผ่านเพราะว่า ฟีลเหมือน ||
const SomeResult = members.some((member) => {
  return member.age > 25
})
console.log(SomeResult);

//reduce อันนี้เหมือนการนำตัว parameter ตัวแรกมาเก็บค่าของ paremeter ตัวที่สองที่เกิดการ function ในส่วนนี้ผมยังไม่ค่อยเข้าใจอาจจะต้องลองใช้บ่อยๆก่อนครัับ 
const Numbers = [10,20,30,40];
const reduceResult = Numbers.reduce((sum , number) => {
  return sum+number
})
console.log(reduceResult);