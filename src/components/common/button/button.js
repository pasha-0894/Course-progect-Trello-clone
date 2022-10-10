import './button.css';


export function createButton(text) {
    const button = document.createElement('button');
    button.className = 'button';
    const buttonText = document.createTextNode(`${text}`);
    button.append(buttonText);

    return button;
}