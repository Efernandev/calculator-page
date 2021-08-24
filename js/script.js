
function insert(num) {
    document.form.textview.value = document.form.textview.value+num;
}

function result() {
    var exp = document.form.textview.value;
    if (exp) {
        document.form.textview.value = eval(exp);
    }
}

function reset() {
    document.form.textview.value = "";
}

function removeLetter() {
    var exp = document.form.textview.value;
    document.form.textview.value = exp.substring(0, exp.length-1)
}