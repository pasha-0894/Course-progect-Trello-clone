import { createHeaderElement } from '../header'
import { createBoardElement } from '../board'

export function createAppElement() {
  const appElement = document.createElement('div');
  const headerElement = createHeaderElement();
  const boardElement = createBoardElement();

  appElement.append(headerElement);
  appElement.append(boardElement);

  return appElement;
}
