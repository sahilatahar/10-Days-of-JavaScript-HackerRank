const btn = document.getElementById('btn');

btn.addEventListener('click', (e) => {
    let value = btn.textContent;
    console.log(value);
    btn.innerHTML = Number(value)+1;
});