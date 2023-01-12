let inputUser = prompt("Please enter a positive whole number: ");

while (inputUser < 0 ) {
    inputUser = prompt("Please enter a positive whole number: ");
}

let highestInt = 0;
let sum = 0;
for (; inputUser != 0; inputUser--) {
    let currentInt = parseInt(prompt("Please enter a positive whole number, there is " + inputUser + " number left to enter: "));
    if (currentInt > highestInt) {
        highestInt = currentInt;
    }
    sum += currentInt;
}

document.write("Your Highest int is: " + highestInt + ". Whilst your sum is: " + sum);
