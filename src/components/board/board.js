import { createBoardColumn } from './board-column.js'
import { createBoardColumnButton } from '../common/button/board-column-button'
import { getTicketsArray, render } from '../controllers';
import { createModalWindow } from '../common/modal-window/modal-window'
import { rootElement } from '../..';
import { createTicket } from '../ticket/ticket.js';
import './board.css';




const boardElement = document.createElement('div');
boardElement.className = 'board-element';

export function createBoardElement() {

    let array = getTicketsArray();

    const arrayToDo = array.filter(value => value.status === 'ToDo');
    const arrayInProgress = array.filter(value => value.status === 'In Progress');
    const arrayDone = array.filter(value => value.status === 'Done');




    const boardColumnDone = createBoardColumn('Done', 'rgb(122, 252, 122)', arrayDone);
    const boardColumnInProgress = createBoardColumn('In Progress', 'rgb(122, 215, 252)', arrayInProgress);
    const boardColumnToDo = createBoardColumn('ToDo', 'rgb(250, 129, 129)', arrayToDo);

    const buttonAdd = createButtonAdd(boardColumnToDo);
    const buttonDeleteAll = createButtonDeleteAll();

    boardColumnToDo.append(buttonAdd);
    boardColumnDone.append(buttonDeleteAll);

    boardElement.append(boardColumnToDo);
    boardElement.append(boardColumnInProgress);
    boardElement.append(boardColumnDone);

    return boardElement;
}

function createButtonAdd(boardColumnToDo) {
    const buttonAdd = createBoardColumnButton('Add todo');

    buttonAdd.addEventListener('click', function () {
        rootElement.append(createModalWindow(boardColumnToDo));
    });

    return buttonAdd;
}

function createButtonDeleteAll() {
    const buttonDeleteAll = createBoardColumnButton('Delete All');

    buttonDeleteAll.addEventListener('click', function () {
        localStorage.clear();
        renderBoardElement();
    }
    )

    return buttonDeleteAll;
}


export function renderBoardElement() {

    let array = getTicketsArray();

    const arrayToDo = array.filter(value => value.status === 'ToDo');
    const arrayInProgress = array.filter(value => value.status === 'In Progress');
    const arrayDone = array.filter(value => value.status === 'Done');

    boardElement.innerHTML = '';


    const boardColumnDone = createBoardColumn('Done', 'rgb(122, 252, 122)', arrayDone);
    const boardColumnInProgress = createBoardColumn('In Progress', 'rgb(122, 215, 252)', arrayInProgress);
    const boardColumnToDo = createBoardColumn('ToDo', 'rgb(250, 129, 129)', arrayToDo);

    const buttonAdd = createButtonAdd(boardColumnToDo);
    const buttonDeleteAll = createButtonDeleteAll();

    boardColumnToDo.append(buttonAdd);
    boardColumnDone.append(buttonDeleteAll);

    boardElement.append(boardColumnToDo);
    boardElement.append(boardColumnInProgress);
    boardElement.append(boardColumnDone);

    return boardElement;
}


