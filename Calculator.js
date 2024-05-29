function display(val) {
    var v = document.getElementById('answer');
    v.value += val;
}

function calculate() {
    var num1 = document.getElementById('answer').value;
    var num2 = eval(num1);
    document.getElementById('answer').value = num2;
}

function clearScreen() {
    var inp = document.getElementById('answer');
    inp.value = '';
}

function back() {
    var ev = document.getElementById('answer');
    ev.value = ev.value.slice(0,-1);
 }
