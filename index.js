// Code your solutions in this file
function countDown() {
    let number = 10;
    while (number > -1) {
        console.log(number);
        number--;
    }
}

countDown()

function writeCards() {
    let names = ["Guadalupe", "Ollie", "Aki"];
    let messages = [];
    for (let i = 0; i < names.length; i++) {
        messages.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`);
    }
    return (messages);
}
