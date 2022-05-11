async function signupFormHandler(event) {
    event.preventDefault();

    // query the document for the selectors by their id and set the text from text area to a variable
    const username = document.querySelector('#signUpUserName').value.trim();
    const email = document.querySelector('#signUpUserEmail').value.trim();
    const password = document.querySelector('#signUpUserPW').value.trim();
    
    // conditional to check if the user filled out the textarea. if so create a new user using the post route
    if (username && email && password) {
        const response = await fetch('/api/users', {
            method: 'POST',
            body: JSON.stringify({
                username,
                email,
                password
            }),
            headers: { 'Content-Type': 'application/json' }
        });
        if (response.ok) {
            document.location.replace('/home/');
        } else {
            alert(response.statusText);
        }
    }
}

// function for the user to log in
async function loginFormHandler(event) {
    event.preventDefault();

    // query the document for the selectors by their id and set the text from text area to a variable
    const username = document.querySelector('#loginUserName').value.trim();
    const password = document.querySelector('#loginPassword').value.trim();

    // conditional to check if the user filled out the textareas. if so log the user in using the post route
    if (username && password) {
        const response = await fetch('/api/users/login', {
            method: 'post',
            body: JSON.stringify({
                username,
                password
            }),
            headers: { 'Content-Type': 'application/json' }
        });

        if (response.ok) {
            document.location.replace('/dashboard/');
        } else {
            alert(response.statusText);
        }
    }
}


document.querySelector('#logInBtn').addEventListener('click', loginFormHandler);
document.querySelector('#signUpBtn').addEventListener('click', signupFormHandler);