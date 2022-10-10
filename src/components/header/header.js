import './header.css';


function updateTime(headerElementDate) {
    const date = new Date;

    const time = (`${date.getHours() < 10 ? '0' : ''}${date.getHours()}:
    ${date.getMinutes() < 10 ? '0' : ''}${date.getMinutes()}:
    ${date.getSeconds() < 10 ? '0' : ''}${date.getSeconds()}`);


    headerElementDate.innerHTML = '';
    const headerElementDateText = document.createTextNode(time);
    headerElementDate.className = 'header-element-date';
    headerElementDate.append(headerElementDateText);
}



export function createHeaderElement() {
    const headerElement = document.createElement('div');
    headerElement.className = 'header-element';

    const headerElementName = document.createElement('h1');
    const headerElementNameText = document.createTextNode('Trello');
    headerElementName.className = 'header-element-name';


    const headerElementDate = document.createElement('h1');
    updateTime(headerElementDate);
    setInterval(() => {
        updateTime(headerElementDate);
    }, 700);

    //const headerElementDateText = document.createTextNode(`${date.getHours()}:${date.getMinutes()}`);
    // headerElementDate.className = 'header-element-date';

    //headerElementDate.append(headerElementDateText);
    headerElementName.append(headerElementNameText);


    headerElement.append(headerElementName);
    headerElement.append(headerElementDate);


    return headerElement;
}