let inputUser = prompt("Please enter a positive whole number: ");

while (inputUser < 0 ) {
    inputUser = prompt("Please enter a positive whole number: ");
}

let sum = 0;
for (; inputUser != 0; inputUser--) {
    sum += parseInt(prompt("Please enter a positive whole number, there is " + inputUser + " number left to enter: "));
}

document.write("Your Final Sum is: " + sum);
