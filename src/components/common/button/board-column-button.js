import './board-column-button.css';



export function createBoardColumnButton(text) {
    const boardColumnButton = document.createElement('button');
    boardColumnButton.className = 'board-column-button';
    const boardColumnButtonText = document.createTextNode(`${text}`);
    boardColumnButton.append(boardColumnButtonText);

    return boardColumnButton;
}

