try {
    console.log(a);
} catch (err) {
    console.log("Error caught: ", err);
}
console.log(3+7); // ยังทำงานได้แม้ code ข้างบน  error 

try {
    console.log("Inside try block");
    throw new Error("something went wrong!");
} catch (err) {
    console.log("Caught:", err.message);
} finally {
    console.log("THis aways run");
}