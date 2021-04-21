let calculation;
function init() {
    calculation = {
        lists: [],
        temp: [],
    }
}
init()

let result = document.getElementById('result')
let process = document.getElementById('process')

function clickButton(input) {
    let isAC = input == 'AC'
    let isDEL = input == 'DEL'
    let isEquals = input == '='
    let isDivided = input == '/'
    let isMultiply = input == '*'
    let isMinus = input == '-'
    let isPlus = input == '+'
    let isDot = input == '.'
    let isSign = isNaN(Number(input))
    let latest = calculation.lists[calculation.lists.length - 1]

    if (calculation.lists.length == 0 && isSign) {
        return false
    }

    if (isAC) {
        result.innerText = '0'
        process.innerText = ''
        init()
        return false
    }

    if (isDEL) {
        calculation.lists.pop()
        process.innerText = calculation.lists.join('')
        return false
    }

    if (isEquals) {
        checkLatest(latest)
        calcTemp()
        result.innerText = calculation.temp
        init()
        calculation.lists.push(result.innerText)
        return false
    }

    if (isDivided) {
        checkLatest(latest)
    } else if (isMultiply) {
        checkLatest(latest)
    } else if (isMinus) {
        checkLatest(latest)
        calcTemp()
        calculation.temp.push(input)
    } else if (isPlus) {
        checkLatest(latest)
        calcTemp()
        calculation.temp.push(input)
    } else if (isDot) {
        checkLatest(latest)
    } else {
    }

    calculation.lists.push(input)
    process.innerText = calculation.lists.join('')
}

function checkLatest(latest) {
    if (isNaN(Number(latest))) {
        calculation.lists.pop()
    }
}

function calcTemp() {
    calculation.temp = [Number(eval(calculation.lists.join('')).toPrecision(12))]
}