
// // 1. Define a variable (name) that is a STRING of your name.
// const myName = "pedro"


// // 2. Console log your name variable and add the string "is cool".
// console.log(myName) + "is cool" 
// // 3. Create a new variable called daysUntilChristmas. Set this variable equal to 25 minus today's day value (1).
// const daysUntilChristmas = 25-1 
// // Console log this variable preceeded by the string: "Days until Christmas". Don't forget the comma!

//  "days until Christmas",console.log(daysUntilChristmas)


// const frontTeeth = "my two front teeth";
// // 4. Using interpolation, console log the following phrase using the variable frontTeeth:
// var str = `all i want for Christmas is ${frontTeeth}`

// console.log(str)
// // "All I want for Christmas is my two front teeth."
// function decemberCountdown(date, today) {
// return date - today;
// }
// // 5. Using the decemberCountdown function, take the day value of New Year's Eve (31) minus today's day value (1).
// decemberCountdown(31-1) = myName

// // Set this equal to a variable! Console log it to confirm your answer!
// console.log(myName)


// // homework 1//
// function madlib(amount,sevice){
//     switch (sevice){
//         case ("good"): 20%
//         return amount * 20%
//     }
// } //did not finish //

// HW 2//
function tipCalc(amount,service){
    switch (service){
        case ("good"):
            return amount * .20
        case ("fair"):
            return amount *.15
        case ("bad"):
            return amount* .10
            default:
                return
    }
}
console.log(tipCalc(100,"good"))

function totalAmont(amount,service){
    return tipCalc(amount,service)+amount
}
console.log(totalAmont(100,"good"))

function splitAmount(amount,service,partyN){
    return totalAmont(amount,service) / partyN
}
console.log(splitAmount(100,"good",2))


