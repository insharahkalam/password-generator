// let inp = prompt("Enter your passsword length: ")

// let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// let num = "0123456789"
// let lowerCase = "abcdefghijklmnopqrstuvwxyz";
// let special = "~!@#$%^&*_-";

// let concate = upperCase+lowerCase+num+special

// let btn = document.getElementById("generate-btn");
// let output = document.getElementById("output");

// btn.addEventListener("click", function () {
//     let pass = "";
//     for (let i = 1; i <= inp; i++) {
//       let final1 = concate.charAt(Math.floor(Math.random() * concate.length));
//       pass += final1;
//     }
//     output.value = pass; 
// });



let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let num = "0123456789";
let lowerCase = "abcdefghijklmnopqrstuvwxyz";
let special = "~!@#$%^&*_-";

let btn = document.getElementById("generate-btn");
let output = document.getElementById("output");

// checkbox access
let upperCaseCheckbox = document.getElementById("upperCaseCheckbox");
let lowerCaseCheckbox = document.getElementById("lowerCaseCheckbox");
let numberCheckbox = document.getElementById("numberCheckbox");
let specialCheckbox = document.getElementById("specialCheckbox");

btn.addEventListener("click", function () {
    let inp = prompt("Enter your password length: ");
    inp = parseInt(inp);
    
    if (isNaN(inp) || inp < 1) {
        alert("Please enter a valid number");
        return;
    }

    let characters = "";

    if (upperCaseCheckbox.checked) {
        characters += upperCase;
    }
    if (lowerCaseCheckbox.checked) {
        characters += lowerCase;
    }
    if (numberCheckbox.checked) {
        characters += num;
    }
    if (specialCheckbox.checked) {
        characters += special;
    }

    if (characters.length === 0) {
        alert("Please select at least one character type.");
        return;
    }

    let pass = "";
    for (let i = 0; i < inp; i++) {
        let randomChar = characters.charAt(Math.floor(Math.random() * characters.length));
        pass += randomChar;
    }

    output.value = pass;
});
