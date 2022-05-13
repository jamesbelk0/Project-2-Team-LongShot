
// const Category = require("../../models/Category");

const uploader = document.getElementById("image_url");
const selectedCat = document.getElementById("category-select")


// uploader.addEventListener("fileUploadStarted", function (e) {  
//         uploaded = this.value
//         console.log(uploaded);
//      });
async function submitBtnHandler(event) {
    event.preventDefault();
    // query the document for the selectors by their id and set the text from text area to a variable
    const title = document.querySelector('input[name="post-title"]').value.trim();
    const text = document.querySelector('textarea[name="post-content"]').value.trim();
    console.log(title);
    console.log(text);
    console.log(uploader.value);
    console.log(selectedCat.value)

    // conditional to check if the user filled out the textarea. if so create a new user using the post route
    if (title && text) {
        const response = await fetch('/api/post', {
            method: 'POST',
            body: JSON.stringify({
                title: title,
                text: text,
                image_url: uploader.value,
                category: selectedCat.value

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

document.querySelector('#submitBtn').addEventListener('click', submitBtnHandler);