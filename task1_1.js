let inputUser = prompt("Please enter a positive whole number: ");

while (inputUser < 0 ) {
    inputUser = prompt("Please enter a positive whole number: ");
}

let sum = 0;
while (inputUser > 0) {
    sum += parseInt(prompt("Please enter a positive whole number, there is " + count + " number left to enter: "));
    inputUser--;
}

document.write("Your Final Sum is: " + sum);
