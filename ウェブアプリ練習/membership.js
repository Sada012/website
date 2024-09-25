document.addEventListener('DOMContentLoaded', () => {
    const membershipForm = document.getElementById('membershipForm');
    membershipForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        alert(`ユーザー名: ${username}\nパスワード: ${password}`);
    });
});
