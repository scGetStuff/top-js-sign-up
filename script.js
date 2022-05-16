'use strict'

document.getElementById('theForm').addEventListener('submit', (e) => {
    if (!isMatchingPassword())
        e.preventDefault();
});

function isMatchingPassword() {

    const password = document.getElementById('password');
    const confirm = document.getElementById('confirm');
    const message = document.getElementById('message');

    if (password.value === confirm.value) {
        message.innerText = "";
        return true;
    }

    message.innerText = "Password must match";
    return false;
}




