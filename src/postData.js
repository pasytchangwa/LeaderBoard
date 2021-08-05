const xhr = new XMLHttpRequest();
const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/6XXWCXn9VJxphtkrJMBV/scores/';

export default function postData(nameValue, scoreValue) {
  if (typeof nameValue.value === 'string') {
    const params = `user=${nameValue.value}&score=${scoreValue.value}`;
    xhr.open('POST', url, true);
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4 && xhr.status === 200) {
        alert(xhr.responseText);
      }
    };
    xhr.send(params);
  } else {
    alert('Please enter a string only for name or a number only for score');
  }
}