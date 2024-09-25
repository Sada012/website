document.addEventListener('DOMContentLoaded', () => {
    loadPosts();
});

let posts = [];

function loadPosts() {
    const postsSection = document.getElementById('posts');
    postsSection.innerHTML = '';
    posts.forEach((post, index) => {
        const postElement = createPostElement(post, index);
        postsSection.appendChild(postElement);
    });
}

function createPost() {
    const postContent = document.getElementById('postContent').value;
    if (postContent.trim() === '') {
        alert('投稿内容を入力してください。');
        return;
    }
    const newPost = {
        content: postContent,
        comments: [],
        likes: 0
    };
    posts.unshift(newPost);
    document.getElementById('postContent').value = '';
    loadPosts();
}

function createPostElement(post, index) {
    const postElement = document.createElement('div');
    postElement.className = 'post';

    const contentElement = document.createElement('p');
    contentElement.textContent = post.content;
    postElement.appendChild(contentElement);

    const actionsElement = document.createElement('div');
    actionsElement.className = 'post-actions';

    const likeButton = document.createElement('button');
    likeButton.textContent = `いいね (${post.likes})`;
    likeButton.onclick = () => likePost(index);
    actionsElement.appendChild(likeButton);

    const commentButton = document.createElement('button');
    commentButton.textContent = 'コメント';
    commentButton.onclick = () => showCommentBox(index);
    actionsElement.appendChild(commentButton);

    postElement.appendChild(actionsElement);

    const commentsElement = document.createElement('div');
    commentsElement.className = 'post-comments';
    post.comments.forEach(comment => {
        const commentElement = document.createElement('p');
        commentElement.textContent = comment;
        commentsElement.appendChild(commentElement);
    });
    postElement.appendChild(commentsElement);

    return postElement;
}

function likePost(index) {
    posts[index].likes += 1;
    loadPosts();
}

function showCommentBox(index) {
    const comment = prompt('コメントを入力してください:');
    if (comment && comment.trim() !== '') {
        posts[index].comments.push(comment);
        loadPosts();
    }
}

function followUser() {
    alert('ユーザーをフォローしました。');
}
