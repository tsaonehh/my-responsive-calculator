const display = document.querySelector(".display");
const buttons = document.querySelector("button");
const specialCharacters = ["%", "*", "/", "-", "+", "="];
let output = "";

const calculate = (btnValue) => {
    if (btnValue === "=" && btnValue !== "") {
        output = eval(output.replace("%", "/100"));
    } else if (btnValue === "AC"){
        output = "";
    } else if (btnValue === "DEL"){
        output = output.toString().slice(0, -1);
    } else {
    }
    display.value = output;
};

let input = document.getElementById("input");
let equal = document.getElementById("equal");
let clear = document.getElementById("clear");
let erase = document.getElementById("erase");