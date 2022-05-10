// function for when the user creates their post
async function addNewPostHandler(event) {
    event.preventDefault();

    const title = document.querySelector('input[name="post-title"]').value.trim();
    const post_content = document.querySelector('textarea[name="post-content"]').value.trim();
    // INSERT CONST FOR POTENTIAL IMAGE
}

document.querySelector('.new-post-form').addEventListener('submit', addNewPostHandler);