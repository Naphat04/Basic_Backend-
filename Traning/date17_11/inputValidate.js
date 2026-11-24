const readline = require('readline/promises');

async function main() {
  const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

  let age;
  while (true) {
    const input = await rl.question('กรอกอายุ: ');   
    const trimmed = input.trim();                       

    if (trimmed === '') {                               
      console.log('กรุณากรอกอายุ');
      continue;                                         
    }

    const value = Number(trimmed);                      

    if (!Number.isFinite(value)) {                      
      console.log('อายุต้องเป็นตัวเลข');
      continue;
    }

    if (!Number.isInteger(value) || value < 1 || value > 120) {   
      console.log('อายุต้องเป็นจำนวนเต็มระหว่าง 1 ถึง 120');
      continue;
    }

    age = value;                                        
    break;                                              
  }

  console.log(`อายุ: ${age} ปี (ชนิด: ${typeof age})`);
  rl.close();
}

main();