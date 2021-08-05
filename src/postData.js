const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/6XXWCXn9VJxphtkrJMBV/scores/';

const postData = (nameValue, scoreValue) => {
  if (typeof nameValue.value === 'string') {
    const params = { user: `${nameValue.value}`, score: `${scoreValue.value}` };
    fetch(url, {
      method: 'POST',
      body: JSON.stringify(params),
      headers: {
        'Content-type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((params) => console.log('Sucess:', params));
  } else {
    alert('Please enter a string only for name or a number only for score');
  }
};

export default postData;
