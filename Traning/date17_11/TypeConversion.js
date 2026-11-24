Number("120")      // 120
Number("12.5")     // 12.5
Number("  42  ")   // 42     ← ตัดช่องว่างหัวท้ายให้
Number("12a")      // NaN
Number("abc")      // NaN
Number("")         // 0      ⚠️ string ว่างกลายเป็น 0
Number("   ")      // 0      ⚠️
Number(true)       // 1
Number(null)       // 0      ⚠️
Number(undefined)  // NaN

parseInt("12a")        // 12     ⚠️ ยอมรับทั้งที่ input ผิด
parseInt("12.9")       // 12     ← ตัดทศนิยมทิ้ง ไม่ได้ปัด
parseFloat("12.5kg")   // 12.5
parseInt("abc")        // NaN
parseInt("")           // NaN


String(120)            // "120"
(120).toString()       // "120"
`${120}`               // "120"  (template literal)
(324).toFixed(2)       // "324.00"  ← ได้ string ใช้สำหรับแสดงผล

Boolean(1)          // true
Boolean(0)          // false
Boolean("")         // false
Boolean("false")    // true   ⚠️ string ที่ไม่ว่างเป็น truthy ทั้งหมด
Boolean("0")        // true   ⚠️