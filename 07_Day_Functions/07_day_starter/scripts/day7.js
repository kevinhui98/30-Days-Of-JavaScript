// function fullname() {
//     console.log('kevin hui')
// }
// fullname()
function fullname(first, last) {
    console.log(first + " " + last)
}
fullname('kevin', 'hui')
function addNumbers(a, b) {
    return a + b
}
console.log(addNumbers(2, 6))
function areaOfRectangle(length, width) {
    return length * width
}
console.log(areaOfRectangle(3, 5))
function perimeterOfRectangle(length, width, height) {
    return length + (width + height)
}
console.log(perimeterOfRectangle(3, 5, 4))
function volumeOfRectPrism(length, width, height) {
    return length * (width * height)
}
console.log(volumeOfRectPrism(3, 4, 5))
function areaOfCircle(r) {
    return Math.PI * (r * r)
}
console.log(areaOfCircle(5))
function circumOfCircle(r) {
    return (2 * Math.PI) * r
}
console.log(circumOfCircle(3))
function density(mass, volume) {
    return mass / volume
}
function speed(distance, time) {
    return distance / time
}
function weight(mass, gravity) {
    return mass * gravity
}
function convertCelsiusToFarhenheit(c) {
    return (c * (9 / 5)) + 32
} function bmi(kg, height) {
    let BMI = kg / (height * height)
    switch (BMI) {
        case BMI < 18.5:
            return "Underweight"
        case ((BMI >= 18.5) && (BMI <= 24.9)):
            return 'Normal weight'
        case ((BMI >= 25) && (BMI <= 29.9)):
            return 'Overweight'
        default:
            return 'Obese'
    }
}
function checkSeason(month, day) {// did not do test cases where days are less than 21 and month is other than predefined
    if (((day >= 21) && (month === "march")) || (month === (('apirl') || ('may')))) {
        return 'spring'
    } else if (((day >= 21) && (month === "june")) || (month === (('july') || ('august')))) {
        return 'summer'
    } else if (((day >= 21) && (month === "september")) || (month === (('october') || ('november')))) {
        return 'fall'
    } else if (((day >= 21) && (month === "december")) || (month === (('january') || ('february')))) {
        return 'winter'
    }
}
console.log(checkSeason('march', 21))
function findMax(a, b, c) {
    return Math.max(a, b, c)
}
console.log(findMax(12, 43, 6543))
//exercise 2
function solveLinEquation(a, b, c) {
    if ((a < 0 && b < 0 && c < 0) || (a > 0 && b > 0 && c > 0)) {
        return `y = ${(-(a) / b)}x${-c / b}`
    } else if ((a < 0 && b < 0 && c > 0) || (a > 0 && b > 0 && c < 0)) {
        return `y = ${(-(a) / b)}x+${-c / b}`
    } else if ((a < 0 && b > 0 && c < 0) || (a > 0 && b < 0 && c > 0)) {
        return `y = ${(-(a) / b)}x+${-c / b}`
    } else if ((a > 0 && b < 0 && c < 0) || (a < 0 && b > 0 && c > 0)) {
        return `y = ${(-(a) / b)}x${-c / b}`
    }

} console.log(solveLinEquation(1, -2, -3))
function printArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i])
    }
}
function showDateTime() {
    let dateTime = new Date()
    let hour = dateTime.getHours()
    if (hour == 24) {
        hour = 0
    }
    if (hour > 12) {
        hour -= 12
    }
    if (hour < 12) {
        hour = '0' + hour.toString()
    }
    let min = dateTime.getMinutes()
    if (min < 10) {
        min = '0' + min.toString()
    }
    console.log(`${dateTime.getMonth()}/${dateTime.getDate()}/${dateTime.getFullYear()} ${hour}:${dateTime.getMinutes()}`)
}
showDateTime()
const swapValues = (x = 34, y = 31) => {
    let temp = x
    x = y
    y = temp
    return [x, y]
}
console.log(swapValues(23, 53))
const reverseArray = (arr) => {
    return arr.reverse()
}
console.log(reverseArray([1, 2, 3, 4, 5]))
const capitalizeArray = (arr) => {
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        newArr.push(arr[i].toUpperCase())
    }
    return newArr
}
console.log(capitalizeArray(['a', 'b', 'c']))
let arr = []
const addItem = (item) => {
    return arr.push(item)
}
const removeItem = (item) => {
    return arr.splice(arr.indexOf(item))
}
const sumOfNumbers = (...arg) => { //same as sum function
    let sum = 0
    for (let num of arg) {
        sum += num
    }
    return sum
}
const sumOfOdds = (...arg) => {
    let sum = 0
    for (let num of arg) {
        if (num % 2 != 0) {
            sum += num
        }
    }
    return sum
}
const sumOfEven = (...arg) => {
    let sum = 0
    for (let num of arg) {
        if (num % 2 == 0) {
            sum += num
        }
    }
    return sum
}
const evensAndOdds = (number) => {
    let odds = 0
    let evens = 0
    for (let i = 0; i < number + 1; i++) {
        if (i % 2 == 0) {
            evens++
        } else odds++
    }
    console.log(`The number of odds are ${odds}.`)
    console.log(`The number of evens are ${evens}.`)
    return true
}
evensAndOdds(100)
