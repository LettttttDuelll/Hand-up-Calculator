function display1() {
    document.getElementById("display").value += "1";
}
function display2() {
    document.getElementById("display").value += "2";
}
function display3() {   
    document.getElementById("display").value += "3";
}
function display4() {   
    document.getElementById("display").value += "4";
}
function display5() {   
    document.getElementById("display").value += "5";
}
function display6() {   
    document.getElementById("display").value += "6";
}
function display7() {   
    document.getElementById("display").value += "7";
}
function display8() {   
    document.getElementById("display").value += "8";
}
function display9() {   
    document.getElementById("display").value += "9";
}
function display0() {   
    document.getElementById("display").value += "0";
}
function displayPlus() {   
    document.getElementById("display").value += "+";
}
function displaySub() {   
    document.getElementById("display").value += "-";
}
function displayMulti() {   
    document.getElementById("display").value += "x";
}
function displayDivision() {   
    document.getElementById("display").value += "/";
}
function displayDot() {   
    document.getElementById("display").value += ".";
}
function deleteAll(){
    document.getElementById("display").value = "";
}
function deleteMono() {
    var currentValue = document.getElementById("display").value;
    if (currentValue.length > 0) {
        document.getElementById("display").value = currentValue.slice(0, -1);
    }
}
function displayEqual() {
    let expression = document.getElementById("display").value;
    try {
        // Replace 'x' with '*' for multiplication
        expression = expression.replace(/x/g, '*');
        let result = eval(expression) ;
        let rounded = parseFloat(result.toFixed(9));
        document.getElementById("display").value = rounded;
    } catch (error) {
        document.getElementById("display").value = "Error";
    }
}