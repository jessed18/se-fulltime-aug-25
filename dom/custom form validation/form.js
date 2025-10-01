const tcChekcbox = document.querySelector('.js-tc');


function alwaysAcceptClicked() {
    window.localStorage.setItem('acceptTc',true);
    tcChekcbox.checked = true;
}

function neverAcceptClicked() {
    if (window.localStorage.getItem('acceptTc') === 'true') {
        tcChekcbox.checked = false;
    }
    window.localStorage.removeItem('acceptTc');
}

function formSubmitted(event) {
    if (!tcChekcbox.checked) {
        event.preventDefault();
        alert('please accept t&c before submitting the form.');
    }
}

function allowFreeTextEmail() {
    document.querySelector('.js-email').setAttribute('type', 'text');
    document
        .querySelector('.js-email')
        .setAttribute('placeholder','e-mail (free text)');

}

 if (window.localStorage.getItem('acceptTc') === 'true') {
        tcChekcbox.checked = false;
 }

document.querySelector('.js-form').addEventListener('submit',formSubmitted);
document
    .querySelector('.js-always-accept')
    .addEvenetListener('click',alwaysAcceptClicked);
document
    .querySelector('.js-never-accept')
    .addEvenetListener('click',neverAcceptClicked);
document
    .querySelector('.js-allow-free-text-email')
    .addEventListener('click',allowFreeTextEmail);