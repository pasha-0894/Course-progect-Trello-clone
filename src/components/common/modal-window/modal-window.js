import { createTicketObject } from '../../controllers';
import { renderColumn } from '../../controllers/controllers';
import { renderBoardElement } from '../../board';
import './modal-window.css';
import { deleteTicket } from '../../controllers/controllers';



export function createModalWindow() {

    const modalWindow = document.createElement('div');
    modalWindow.className = 'modal-window';

    const title = createTitleArea();
    const description = createDescriptionArea();
    const buttonBlock = createButtonBlock(modalWindow, title, description);


    modalWindow.append(title);
    modalWindow.append(description);
    modalWindow.append(buttonBlock);

    return modalWindow;
}

async function getUsers(selectUser, userName, userNameText) {
    const response = await fetch('https://63406c36e44b83bc73d039e6.mockapi.io/users');
    const result = await response.json();
    for (let i = 0; i < result.length; i++) {
        userName = document.createElement('option');
        userNameText = document.createTextNode(`${result[i].name}`);
        userName.append(userNameText);
        selectUser.append(userName);
    }
    return result;
}

function createDescriptionArea(object) {
    const description = document.createElement('input');
    description.className = 'description';
    description.placeholder = 'Description';
    description.maxLength = '110';
    if (object) {
        description.value = object.description;
    }
    return description;
}

function createTitleArea(object) {
    const title = document.createElement('input');
    title.className = 'title';
    title.placeholder = 'Title';
    title.maxLength = '20';
    if (object) {
        title.value = object.title;
    }
    return title;
}

function createSelect(object) {
    const selectUser = document.createElement('select');
    selectUser.className = 'select-user';

    const userName = document.createElement('option');
    if (object) {
        const userNameText = document.createTextNode(`${object.user}`);
        userName.append(userNameText);
        getUsers(selectUser, userName, userNameText);
    } else {
        const userNameText = document.createTextNode(`Select user`);
        userName.append(userNameText);
        getUsers(selectUser, userName, userNameText);
    }

    selectUser.append(userName);

    return selectUser;
}

function createButton(text) {
    const button = document.createElement('button');
    button.className = 'button-modal-window';
    const buttonText = document.createTextNode(`${text}`);
    button.append(buttonText);
    return button;
}

function createButtonBlock(modalWindow, title, description, object) {
    const buttonBlock = document.createElement('div');
    buttonBlock.className = 'button-block';

    const selectUser = createSelect(object);
    const buttonCancel = createButton('Cancel');
    const buttonSave = createButton('Save');

    buttonBlock.append(selectUser);
    buttonBlock.append(buttonSave);
    buttonBlock.append(buttonCancel);

    buttonCancel.addEventListener('click', function () {
        modalWindow.remove();
    })

    if (object) {
        buttonSave.addEventListener('click', function () {
            const titleValue = title.value;
            const descriptionValue = description.value;
            const selectUserValue = selectUser.value;
            createTicketObject(titleValue, descriptionValue, selectUserValue);
            deleteTicket(object);
            renderBoardElement();
            modalWindow.remove();
        })
    } else {
        buttonSave.addEventListener('click', function () {
            const titleValue = title.value;
            const descriptionValue = description.value;
            const selectUserValue = selectUser.value;
            createTicketObject(titleValue, descriptionValue, selectUserValue);
            renderBoardElement();
            modalWindow.remove();
        })
    }



    return buttonBlock;
}


export function createModalWindowEdit(boardColumn, object) {
    const modalWindow = document.createElement('div');
    modalWindow.className = 'modal-window';

    const title = createTitleArea(object);
    const description = createDescriptionArea(object);
    const buttonBlock = createButtonBlock(modalWindow, title, description, object);


    modalWindow.append(title);
    modalWindow.append(description);
    modalWindow.append(buttonBlock);

    return modalWindow;
}