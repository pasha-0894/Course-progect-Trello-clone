import './board-column-header.css';


export function createBoardColumnHeader(text, color) {
    const boardColumnHeader = document.createElement('div');
    boardColumnHeader.className = 'board-column-header';
    const boardColumnHeaderText = document.createTextNode(`${text}`);
    boardColumnHeader.append(boardColumnHeaderText);
    boardColumnHeader.style.backgroundColor = `${color}`;

    return boardColumnHeader;
}