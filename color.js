const prompt = require('prompt-sync')();

let num1 = Number(prompt("Would you like to construct or deconstruct a color? Enter 1 to construct or 2 to deconstruct: "))

if (num1 === 1){
    let num2 = Number(prompt("Enter a number for your first construct color. 1=RED 2=YELLOW 3=BLUE: "))
    let num3 = Number(prompt("Enter a number for your second construct color. 1=RED 2=YELLOW 3=BLUE: "))

    // constructs
    if (num2 === 1 && num3 === 3){
        console.log("You" + " " + "have" + " " + "made" + " " + "purple")
    }else if (num2 === 3 && num3 === 1){
        console.log("You" + " " + "have" + " " + "made" + " " + "purple")
    }else if (num2 === 1 && num3 === 2){
        console.log("You" + " " + "have" + " " + "made" + " " + "orange")
    }else if (num2 === 2 && num3 === 1){
        console.log("You" + " " + "have" + " " + "made" + " " + "orange")
    }else if (num2 === 3 && num3 === 2){
        console.log("You" + " " + "have" + " " + "made" + " " + "green")
    }else if (num2 === 2 && num3 === 3){
        console.log("You" + " " + "have" + " " + "made" + " " + "green")
    }else if (num2 >= 4){
        console.log ("error!")
    }else if (num3 >= 4){
        console.log ("error!")
    }else if (num2 === 1 && num3 === 1){
        console.log("You" + " " + "have" + " " + "made" + " " + "red")
    }else if (num2 === 2 && num3 === 2){
        console.log("You" + " " + "have" + " " + "made" + " " + "yellow")
    }else if (num2 === 3 && num3 === 3){
        console.log("You" + " " + "have" + " " + "made" + " " + "blue")
    }
    // deconstructs
}else if (num1 === 2){
    let num4 = Number(prompt("Enter a number for the color you want to deconstruct. 1=PURPLE 2=ORANGE 3=GREEN: "))

    if (num4 === 1){
        console.log("Purple" + " " + "deconstructs" + " " + "to" + " " + "red" + " " + "and" + " " + "blue")
    }else if (num4 === 2){
        console.log("Orange" + " " + "deconstructs" + " " + "to" + " " + "red" + " " + "and" + " " + "yellow")
    }else if (num4 === 3){
        console.log("Green" + " " + "deconstructs" + " " + "to" + " " + "blue" + " " + "and" + " " + "yellow")
    }else if (num4 >= 4){
        console.log("error!")
    }

}else if (num1 >= 3){
    console.log("error!");
