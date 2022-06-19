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