// Arrow Expression
console.log("Arrow Expresion")
// no arrow function
function countLength(num1, num2) {
    return num1 + num2
}
console.log(countLength(10, 20)) //30

// arrow Function
const countLength2 = (num1, num2) => {
    return num1 + num2;
}
console.log(countLength2(10, 30)) //40

// hasil yang muncul pada terminal saat menulisakan format; node index js adalah
// 30
// 40

// Asynchronous
console.log("Asychronous")
// seTimeout bertugas mengatur nilai mana yang terahir muncul dengan menggunakan jeda Waktu
console.log("cuci piring");
setTimeout(() => {
    console.log("cuci Baju")
}, 1000)
console.log("masak");







