const prompt = require('prompt-sync')();
var number = parseInt(Math.random() * 100);
var win = false;
var count = 1;
var maxGuess = undefined;
var guessNum;
var message = '';
var input = '';

do {
    maxGuess = parseInt(prompt('กรุณาจำนวนครั้งในการทาย สูงสุดได้ไม่เกิน 10 : '))
} while ((maxGuess <= 0) || (maxGuess >= 10))


do {
    input = prompt(`การทายครั้งที่: ${count} กรุณาใส่ตัวเลข >> `);
    guessNum = parseInt(input);
    if (guessNum > number) {
        message = 'น้อยกว่านี้';
    } else if (guessNum < number) {
        message = 'มากกว่านี้';
    } else if (guessNum == number) {
        message = 'ถูกต้อง';
        win = true;
    } else {
        message = 'กรุณาใส่ค่าเป็นตัวเลข 0 - 100';
    }
    console.log(message + '\n')

    if (count == maxGuess) {
        console.log('ทายเกินจำนวนครั้งที่กำหนด')
        break
    }
    count++;
} while (!win)