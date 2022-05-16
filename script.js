'use strict'

const inputs = [...document.getElementById('theForm').getElementsByTagName('input')];

// submit button set style for all inputs
document.getElementById('theButton').addEventListener('click', (e) => {
    inputs.forEach(input => {
        // TODO: should be able to do something with toggle(), not this stupid looking way
        if(input.validity.valid)
            input.classList.remove('error');
        else
            input.classList.add('error');
    });
});

// check paswords match






