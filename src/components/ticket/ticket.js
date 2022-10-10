import './ticket.css';
import { createButton } from '../common/button'
import { deleteTicket, updateLocalStorage } from '../controllers/controllers';
import { renderBoardElement } from '../board'
import { getTicketsArray } from '../controllers/controllers'
import { rootElement } from '../..';
import { createModalWindow, createModalWindowEdit } from '../common/modal-window/modal-window';







export function createTicket(ticketObject) {

    const ticket = document.createElement('div');
    ticket.className = 'ticket';

    const ticketTitle = createTicketTitle(ticketObject.title);
    const ticketDescription = createTicketDescription(ticketObject.description);
    const ticketUser = createTicketUser(ticketObject.user);
    const ticketTime = createTicketTime(ticketObject.time);

    const ticketButtonBlock = document.createElement('div');
    ticketButtonBlock.className = 'ticket-block-button';

    const firstButton = getFirstButton(ticketObject);
    ticketButtonBlock.append(firstButton);

    const secondButton = getSecondButton(ticketObject);
    ticketButtonBlock.append(secondButton);

    const buttonInWork = getThirdButton(ticketObject);

    ticketButtonBlock.append(buttonInWork);

    ticket.append(ticketTime);
    ticket.append(ticketTitle);
    ticket.append(ticketDescription);
    ticket.append(ticketUser);
    ticket.append(ticketTime);
    ticket.append(ticketButtonBlock);

    return ticket;
}


function createTicketTitle(title) {
    const ticketTitle = document.createElement('p');
    ticketTitle.className = 'ticket-title';
    const ticketTitleText = document.createTextNode(`${title}`);
    ticketTitle.append(ticketTitleText);
    return ticketTitle;
}

function createTicketDescription(description) {
    const ticketDescription = document.createElement('p');
    ticketDescription.className = 'ticket-description';
    const ticketDescriptionText = document.createTextNode(`${description}`);
    ticketDescription.append(ticketDescriptionText);
    return ticketDescription;
}

function createTicketUser(user) {
    const ticketUser = document.createElement('p');
    ticketUser.className = 'ticket-user';
    const ticketUserText = document.createTextNode(`${user}`);
    ticketUser.append(ticketUserText);
    return ticketUser;
}

function createTicketTime(time) {
    const ticketTime = document.createElement('div');
    ticketTime.className = 'ticket-time';
    const ticketTimeContent = document.createTextNode(`${time}`);
    ticketTime.append(ticketTimeContent);
    return ticketTime;
}


function getFirstButton(ticketObject) {
    if (ticketObject.status === 'ToDo') {
        const buttonEdit = createButton('Edit');
        buttonEdit.addEventListener('click', function () {
            rootElement.append(createModalWindowEdit(this, ticketObject));
        });
        return buttonEdit
    } else if (ticketObject.status === 'In Progress') {
        const buttonBack = createButton('Back');
        buttonBack.addEventListener('click', function () {
            ticketObject.status = 'ToDo';
            updateLocalStorage(ticketObject);
            renderBoardElement();
        })
        return buttonBack
    } else if (ticketObject.status === 'Done') {
        const buttonDelete = createButton('Delete');
        buttonDelete.addEventListener('click', function () {
            deleteTicket(ticketObject);
            updateLocalStorage(ticketObject);
            renderBoardElement();
        })
        return buttonDelete
    }
}



function getSecondButton(ticketObject) {
    if (ticketObject.status === 'ToDo') {
        const buttonDelete = createButton('Delete');
        buttonDelete.addEventListener('click', function () {
            deleteTicket(ticketObject);
            updateLocalStorage(ticketObject);
            renderBoardElement();
        })
        return buttonDelete
    } else if (ticketObject.status === 'In Progress') {
        const buttonComplete = createButton('Complete');
        buttonComplete.addEventListener('click', function () {
            ticketObject.status = 'Done';
            updateLocalStorage(ticketObject);
            renderBoardElement();
        })
        return buttonComplete
    } else {
        const button = '';
        return button
    }
}


function getThirdButton(ticketObject) {
    if (ticketObject.status === 'ToDo') {
        const buttonInWork = createButton('In work');
        buttonInWork.addEventListener('click', function () {
            ticketObject.status = 'In Progress';
            updateLocalStorage(ticketObject);
            renderBoardElement();
        })

        return buttonInWork
    } else {
        const button = '';
        return button
    }
}