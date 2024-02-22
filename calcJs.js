var numOne=0;
var numTwo=0;
var vals = '+';

function numClick(num){
    document.getElementById('screen').value+=num
}

function arithOp(val){
     numOne = parseFloat(document.getElementById('screen').value)
     vals = val
     document.getElementById('screen').value = " "
}
function clickEquals(){
    numTwo = parseFloat(document.getElementById('screen').value)

    switch(vals){
        case '+': var sum = numOne + numTwo
        break;
        case '-': var sum = numOne - numTwo
        break;
        case '*': var sum = numOne * numTwo
        break;
        case '/': var sum = numOne / numTwo
        break;
        default: document.getElementById('screen').value = 'Erorr!!'
    }
    
    document.getElementById('screen').value = sum
}

function clearScreen(){
    document.getElementById('screen').value = ""
}
