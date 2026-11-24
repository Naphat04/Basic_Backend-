const book = {
    id: "Bo1",
    title: "javaScript 101",
    price: 35000,
    instock: true,
};

console.log(book.price);
console.log(book["price"]);

const key = "id";
console.log(book[key]);

book.author = "Somchai";
book.price = 30000;
delete book.instock;

console.log(book);

const books = [
  { id: "B01", title: "JavaScript 101", price: 35000, active: true,  stock: 4 },
  { id: "B02", title: "Node in Action", price: 52000, active: true,  stock: 0 },
  { id: "B03", title: "Old Manual",     price: 9900,  active: false, stock: 10 },
];

// เพิ่มหนังสือเล่มใหม่ต่อท้าย array
books.push({ id: "B04", title: "SQL Basics", price: 27500, active: true, stock: 7 });

console.log(books[1].id);
console.log(books.length);



for (const b of books) {
  const baht = (b.price / 100).toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
  console.log(`${b.id} | ${b.title} | ${baht} บาท`);
}

// แสดงเฉพาะชื่อหนังสือที่ active เป็น true
const activeTitles = books
  .filter((b) => b.active)   // เก็บเฉพาะเล่มที่ active === true
  .map((b) => b.title);      // แปลงแต่ละเล่มให้เหลือแค่ชื่อ

console.log(activeTitles);   // [ 'JavaScript 101', 'Node in Action' ]
