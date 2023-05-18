// write comment logic here
// need a post and get request from backend
// get and display comments
// post and save new comments
const apiRoute = '/movies/:id';

const postBtn = document.getElementById('post');
let commentBox = document.getElementById('comment-box').value;

const postCommentHandler = async (event) => {
    event.preventDefault();
    console.log(JSON.stringify(commentBox));
    if (commentBox) {
        const response = fetch(apiRoute, {
            method: 'POST',
            body: JSON.stringify({ commentBox }),
            headers: { 'Content-Type': 'application/json' }
        });

        if (response.ok) {
            alert('Comment Posted!');
        } else {
            alert('Failed to Comment!');
        };
    };
};

postBtn.addEventListener('click', postCommentHandler);
