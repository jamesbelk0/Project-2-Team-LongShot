async function signupFormHandler(event) {
  event.preventDefault();

  // query the document for the selectors by their id and set the text from text area to a variable
  const username = document.querySelector('#signUpUserName').value.trim();
  const email = document.querySelector('#signUpUserEmail').value.trim();
  const password = document.querySelector('#signUpUserPW').value.trim();
  
  // conditional to check if the user filled out the textarea. if so create a new user using the post route
  if (username && email && password) {
      const response = await fetch('/api/user', {
          method: 'POST',
          body: JSON.stringify({
              username,
              email,
              password
          }),
          headers: { 'Content-Type': 'application/json' }
      });
      if (response.ok) {
          document.location.replace('/');
      } else {
          alert(response.statusText);
      }
  }
}

document.querySelector('#signUpBtn').addEventListener('click', signupFormHandler);