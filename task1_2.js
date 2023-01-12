let inputUser = prompt("Please enter a positive whole number: ");

while (inputUser < 0 ) {
    inputUser = prompt("Please enter a positive whole number: ");
}

let largestInt = parseInt(inputUser);
while (inputUser > 0) {
    let currentInt = parseInt(prompt("Please enter a positive whole number, there is " + inputUser + " number left to enter: "));
    if (currentInt > largestInt) {
        largestInt = currentInt;
    }
    inputUser--;
}

document.write("The Largest Number your entered was: " + largestInt);
