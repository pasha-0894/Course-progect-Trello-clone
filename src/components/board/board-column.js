import { createBoardColumnHeader } from '../common/board-column-header'
import { render } from '../controllers';
import './board.css';


export function createBoardColumn(text, color, array) {
    let ticketColumn = document.createElement('div');

    const boardColumn = document.createElement('div');
    boardColumn.className = 'board-column';

    const boardColumnHeader = createBoardColumnHeader(text, color);
    boardColumn.append(boardColumnHeader);
    boardColumn.append(ticketColumn);
    boardColumn.append(render(array, ticketColumn));


    return boardColumn;
}