import { createAppElement } from './components/app'


export const rootElement = document.getElementById('root');

const appElement = createAppElement();



rootElement.append(appElement);
