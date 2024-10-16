// Select all buttons inside the div with id 'buttons'
const buttons = document.querySelectorAll('#buttons button');

// Select the display element
const display = document.getElementById('display');

// forEach button of buttons create an eventlistener
buttons.forEach(button => {
    button.addEventListener('click', function(event) {
        const value = event.target.value;

        if (value === '=') {
            display.value = eval(display.value)
        } else if (value === "del") {
            display.value = display.value.slice(0, -1); // Remove the last character of the string
        } else if (value === "clear") {
            display.value = ""
        } else {
            display.value += value;
        }
    });
});

// function(event) is a callback function 

// event.target refers to the item that triggered event (i.e. the button)
// .value accesses the value of the button