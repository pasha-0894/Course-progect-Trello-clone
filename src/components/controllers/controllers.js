import { createTicket } from '../ticket'

let id = 0;

const date = new Date();

export function createTicketObject(titleValue, descriptionValue, selectUserValue) {
    const ticketObject = {
    };
    ticketObject.id = ++id;
    ticketObject.description = descriptionValue;
    ticketObject.title = titleValue;
    ticketObject.user = selectUserValue;
    ticketObject.status = 'ToDo';
    ticketObject.time = `${date.getHours() < 10 ? '0' : ''}${date.getHours()}:${date.getMinutes() < 10 ? '0' : ''}${date.getMinutes()}`;
    let array = getTicketsArray();
    array.push(ticketObject);
    localStorage.setItem('tickets', JSON.stringify(array));
}

export function getTicketsArray() {
    let array = JSON.parse(localStorage.getItem('tickets'));
    if (!Array.isArray(array)) {
        array = [];
    }
    return array;
}

export function createTicketColumn() {
    const ticketColumn = document.createElement('div');
    ticketColumn.className = 'ticket-column';
    return ticketColumn
}

export const ticketColumn = document.createElement('div');

export function renderColumn() {
    ticketColumn.innerHTML = '';
    let array = getTicketsArray();

    if (Array.isArray(array)) {
        for (let i = 0; i < array.length; i++) {
            ticketColumn.append(createTicket(array[i]));
        }
    }
    const arrayToDo = JSON.stringify(array.filter(value => value.status === 'ToDo'));
    const arrayInProgress = JSON.stringify(array.filter(value => value.status === 'In Progress'));
}

export function renderColumnToDO() {
    ticketColumn.innerHTML = '';
    let array = getTicketsArray();
    const arrayToDo = JSON.stringify(array.filter(value => value.status === 'ToDo'));
    if (Array.isArray(arrayToDo)) {
        for (let i = 0; i < arrayToDo.length; i++) {
            ticketColumn.append(createTicket(arrayToDo[i]));
        }
    }
    return ticketColumn;
}




export function updateLocalStorage(ticketObject) {
    let array = getTicketsArray();
    for (let i = 0; i < array.length; i++) {
        if (array[i].id === ticketObject.id) {
            let value = JSON.stringify(ticketObject);
            array[i] = JSON.parse(value);
        }
        localStorage.clear;
        localStorage.setItem('tickets', JSON.stringify(array));
    }
}

export function deleteTicket(ticketObject) {
    let array = getTicketsArray();
    const newArray = array.filter(value => JSON.stringify(value) !== JSON.stringify(ticketObject));
    localStorage.clear;
    localStorage.setItem('tickets', JSON.stringify(newArray));
}

export function sortTickets(boardColumnToDo, boardColumnInProgress) {
    let array = getTicketsArray();
    for (let i = 0; i < array.length; i++) {
        switch (array[i].status) {
            case 'ToDo':
                boardColumnToDo.innerHTML = '';
                const toDo = createTicket(array[i]);
                boardColumnToDo.append(toDo);
                break;
            case 'In Progress':
                const inProgress = createTicket(array[i]);
                boardColumnInProgress.append(inProgress);
                break;
        }
    }
}




export function render(array, ticketColumn) {
    ticketColumn.innerHTML = '';
    if (Array.isArray(array)) {
        for (let i = 0; i < array.length; i++) {
            ticketColumn.append(createTicket(array[i]));
        }
    }
    return ticketColumn;
    //const arrayToDo = JSON.stringify(array.filter(value => value.status === 'ToDo'));
    //const arrayInProgress = JSON.stringify(array.filter(value => value.status === 'In Progress'));

}