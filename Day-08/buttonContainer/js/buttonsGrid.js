const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');
const btn4 = document.getElementById('btn4');
const btn5 = document.getElementById('btn5');
const btn6 = document.getElementById('btn6');
const btn7 = document.getElementById('btn7');
const btn8 = document.getElementById('btn8');
const btn9 = document.getElementById('btn9');

const btns = [btn1, btn2, btn3, btn6, btn9, btn8, btn7, btn4];
const values = [1, 2, 3, 6, 9, 8, 7, 4];

btn5.addEventListener('click', () => {
    values.unshift(values.pop());
    btns.forEach((btn, index) => {
        btn.innerHTML = values[index];
    });
});