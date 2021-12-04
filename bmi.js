//Create a BMI function for health


let name = prompt(" Enter Your Name");
let weight = Number(prompt("Weight"));
let height = Number(prompt("height (ft)"));
let height1 = (height/3.28);
let final_height = (height1*height1).toFixed(2);

let = bmiCal = (weight,height,name) => {

    let bmi = (weight/final_height).toFixed(2);

    return `Hi ${ name}, your BMI is ${ bmi }`

}

console.log(bmiCal(weight,height,name));
