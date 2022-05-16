'use strict'

const inputs = [...document.getElementById('theForm').getElementsByTagName('input')];

// submit sets style for all inputs
document.getElementById('theForm').addEventListener('submit', (e) => {

    // TODO: think this is obsoleat now that I got the psudo stuff in css working
    // inputs.forEach(input => {
    //     // TODO: should be able to do something with toggle(), not this stupid looking way
    //     if (input.validity.valid)
    //         input.classList.remove('error');
    //     else
    //         input.classList.add('error');
    // });

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




