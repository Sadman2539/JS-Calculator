const screen = document.getElementById('screen');
const buttons = document.querySelectorAll('button');
let screenValue = '';
for (const button of buttons) {
    button.addEventListener('click', event => {
        let buttonText = event.target.innerText;
        if (buttonText === 'X') {
            buttonText = '*';
            screenValue += buttonText;
            screen.value = screenValue;
        }
        else if (buttonText === 'CLR') {
            screenValue = '';
            screen.value = screenValue;
        }
        else if (buttonText === '=') {
            screen.value = eval(screenValue);
        }
        else if (buttonText === '→') {
            screenValue = screenValue.substring(0, screenValue.length - 1);
            screen.value = screenValue;
        }
        else {
            screenValue += buttonText;
            screen.value = screenValue;
        }
    })
}