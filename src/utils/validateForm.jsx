
const validateForm = () => {
    const name = document.querySelector('#name');
    const surname = document.querySelector('#surname');
    const phone = document.querySelector('#phone');
    const email = document.querySelector('#email');
    const repeatEmail = document.querySelector('#email-repeat');

    name.classList.remove('error');
    surname.classList.remove('error');
    phone.classList.remove('error');
    email.classList.remove('error');
    repeatEmail.classList.remove('error');

    if (name.value === '') {
        name.classList.add('error');
        return false;
    }
    if (surname.value === '') {
        surname.classList.add('error');
        return false;
    }
    if (phone.value === '') {
        phone.classList.add('error');
        return false;
    }
    if (email.value === '') {
        email.classList.add('error');
        return false;
    }
    if (repeatEmail.value === '') {
        repeatEmail.classList.add('error');
        return false;
    }
    if (email.value !== repeatEmail.value) {
        email.classList.add('error');
        repeatEmail.classList.add('error');
        return false;
    }
    return true;
}

export default validateForm;