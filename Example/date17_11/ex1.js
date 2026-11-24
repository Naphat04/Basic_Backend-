const readline = require('readline/promises');

const discount_rate = 10; 

function UnitPrice(input) { // ราคาต่อหน่วย
    const text = input.trim();
    if (text === '') return {error : 'กรุณากรอกราคาต่อหน่วย'};

    const price = Number(text);
    if (!Number.isFinite(price)) return {error: 'กรุณากรอกเป็นตัวเลข'};
    if (!Number.isInteger(price)) return {error: 'กรุณากรอกเป็นจำนวนเต็ม'};
    if (price <= 0) return {error : 'กรุณากรอกจำนวนมากว่า 0'};

    return {value : price};
    }

function Unit(input) { // จำนวนที่ซื้อ
    const text = input.trim();
    if (text === '') return {error : 'กรุณากรอกข้อมูลจำนวนที่ซื้อ'};

    const unit  = Number(text);
    if (!Number.isFinite(unit)) return {error : 'กรุณากรอกจำนวนเป็นตัวเลข'};
    if (!Number.isInteger(unit)) return {error : 'กรุณากรอกเป็นจำนวนเต็ม'};
    if (unit <= 0) return {errorr : 'กรุณากรอกจำนวนมากว่า 0'};

    return {value : unit};
} 

function CheckMember(input) { //เช็คการเป็น member
    const answer = input.trim().toLowerCase();
    if (answer != 'y' && answer != 'n') return {error: 'กรุณาตอบ y หรือ n'};

    return {value : answer === 'y'};
}

function PriceOfMember(input) { // จ่ายมาเท่าไหร่
    const text = input.trim();
    if (text === '') return {error : 'กรุณากรอกจำนวนเงินที่ลูกค้าต้องจ่าย'};

    const price  = Number(text);
    if (!Number.isFinite(price)) return {error : 'กรุณากรอกจำนวนเป็นตัวเลข'};
    if (price <= 0) return {error : 'กรุณากรอกจำนวนมากว่า 0'};

    return {value : price};
} 

async function  ask(rl , question , ffunction) { // loop ถามซ้ำจนกว่าจะตอบถูก ตรงนี้ให้ ai guide ให้
    while (true) {
        const input = await rl.question(question); 
        const result = ffunction(input);

        if (result.error === undefined) return result.value;
        console.log(result.value);
    }
}


async  function  main() {
    const rl = readline.createInterface({input: process.stdin , output: process.stdout});


    const InputPricePerUnit = await ask(rl,' กรุรากรอกราคาต่อหน่วย :',UnitPrice);
    const InputUnit = await ask(rl,' กรุณากรอกจำนอนของ :',Unit);
    const InputCheckMember = await ask(rl,' กรุณากรอกสถานะ Member :',CheckMember);
    const InputPriceOfMember = await ask(rl,' กรูณากรอกจำนวนเงินที่จ่าย :',PriceOfMember);
    rl.close();

    const SubTotal = InputPricePerUnit * InputUnit ;
    const Discount = InputCheckMember ? SubTotal * discount_rate / 100 : 0;
    const Total = SubTotal - Discount ;
    const Paid = InputPriceOfMember;
 
    console.log(`ยอดก่อนลด : ${SubTotal.toFixed(2)}`);
    console.log(`ส่วนลด : ${Discount.toFixed(2)}`);
    console.log(`ยอกสุทธิ : ${Total.toFixed(2)}`);
    console.log(`เงินรับ : ${Paid.toFixed(2)}`);

    if (Paid >= Total) {
        console.log(`เงินทอน:  ${(Paid - Total).toFixed(2)}`);
    } else {
        console.log(`เงินขาด: ${(Total - Paid).toFixed(2)}`);
    }
}

main();