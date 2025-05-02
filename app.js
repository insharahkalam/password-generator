let inp = prompt("Enter your passsword length: ")

let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let num = "0123456789"
let lowerCase = "abcdefghijklmnopqrstuvwxyz";
let special = "~!@#$%^&*_-";

let concate = upperCase+lowerCase+num+special

let btn = document.getElementById("generate-btn");
let output = document.getElementById("output");

btn.addEventListener("click", function () {
    let pass = "";
    for (let i = 1; i <= inp; i++) {
      let final1 = concate.charAt(Math.floor(Math.random() * concate.length));
      pass += final1;
    }
    output.value = pass; 
});










// let userinp = prompt("enter your pasword length")

// let uppCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

// let lowCase = "abcdefghijklmnopqrstuvwxyz";

// let speChar = "@#$%^&*!";

// let num = "123456789";

// let pass = ""
// let con = uppCase + lowCase + speChar + num;


// for(let i = 0 ; i <= userinp; i++){

//    let res = con.charAt(Math.floor(Math.random() * con.length))

//    pass += res
   
// }
// console.log(pass);


