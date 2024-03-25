const calculator = document.getElementById('calculator');
const displayCurrent = document.getElementById('current-operand');
const displayPrevious = document.getElementById('previous-operand');
const numberButtons = document.querySelectorAll('.number');
const operationButtons = document.querySelectorAll('.operation');
const equalsButton = document.getElementById('equals');
const clearButton = document.getElementById('clear');
const deleteButton = document.getElementById('delete');
const dotButton = document.getElementById('dot');

numberButtons.forEach((number) => {
    number.addEventListener('click', () => {
        appendNumber(number.innerText)
        updateDisplay()
    })
})


operationButtons.forEach((operation) => {
    operation.addEventListener('click', () => {
        chooseOperation(operation.innerText)
        updateDisplay()
    })
})


clearButton.addEventListener("click", clear)
deleteButton.addEventListener("click", deleteCalc)
dotButton.addEventListener("click", appendDot)
equalsButton.addEventListener("click", compute)

let current = '';
let prev = '';
let operation = null

function clear() {
    console.log('clear clicked')
    prev = ''
    current = ''
    operation = null
    updateDisplay()
}
function deleteCalc() {
    current = current.toString().slice(0, -1)
    updateDisplay()
}

function compute() {
    let computation
    const previous = parseFloat(prev)
    const curr = parseFloat(current)
    if (isNaN(previous) || isNaN(curr)) return;

    switch (operation) {
        case '+':
            computation = previous + curr
            break;
        case '-':
            computation = previous - curr
            break;
        case '*':
            computation = previous * curr
            break;
        case '/':
            computation = previous / curr
            break;
        case '%':
            computation = (previous / 100) * curr
            break;
    }
    current = computation
    operation = undefined
    prev = ''
    updateDisplay()

}

function appendDot() {
    if (current.includes('.')) return;
    if (current === '') current = '0'
    current += '.'
    updateDisplay()


}
function appendNumber(number) {
    if (number === '.' && current.includes('.')) return;
    current = current.toString() + number.toString()
}
function chooseOperation(selectedOperation) {
    if (current === ' ') return;
    if (prev !== '') {
        compute()
    }
    operation = selectedOperation
    prev = current
    current = ''
}

function computeSquareRoot() {
    current = Math.sqrt(current)
    updateDisplay()
    current = ''
}
function computeLn() {
    current = Math.log(current).toFixed(2)
    updateDisplay()
    current = ''
}

function updateDisplay() {
    displayCurrent.innerText = current
    displayPrevious.innerText = prev + ' ' + (operation || '')

}