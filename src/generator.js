export default function generatorOfEl(
  tagName, className, typeValue, text, placeholderValue, ariaLabel,
) {
  const element = document.createElement(tagName);
  if (className) element.className = className;
  if (typeValue) element.setAttribute('type', typeValue);
  if (text) element.textContent = text;
  if (placeholderValue) element.setAttribute('placeholder', placeholderValue);
  if (ariaLabel) element.setAttribute('aria-label', ariaLabel);

  return element;
}
export const requestURL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/6XXWCXn9VJxphtkrJMBV/scores/';
export const getData = () => {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', requestURL);
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
      console.log('hello');
    } else console.log('hi');
  };
  xhr.send();
};