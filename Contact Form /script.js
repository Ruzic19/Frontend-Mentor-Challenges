
document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();

    let isValid = true;

    // Validirat ime i prezime

    const firstName = document.getElementById('first-name');
    const firstNameError = document.getElementById('first-name-error');
    if ( !firstName.value.trim() ) {
        firstNameError.textContent = 'This field is required';
        firstName.classList.add('input-error');
        isValid = false;
    } else {
        firstNameError.textContent='';
        firstName.classList.remove('input-error');
    }

    const lastName = document.getElementById('last-name');
    const lastNameError = document.getElementById('last-name-error');
    if (!lastName.value.trim()) {
        lastNameError.textContent ='This field is required';
        lastName.classList.add('input-error');
        isValid = false;
    } else {
        lastNameError.textContent='';
        lastName.classList.remove('input-error');
    }

    const email = document.getElementById('email');
    const emailError = document.getElementById('email-error');
    const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    if (!email.value.trim()) {
        emailError.textContent = 'Email is required';
        email.classList.add('input-error');
        isValid = false;
    } else if (!emailPattern.test(email.value)) {
        emailError.textContent ='Please enter a valid email address';
        isValid = false;
        emailError.classList.add('input-error');
    } else {
        emailError.textContent='';
        emailError.classList.remove('input-error');
    }

    const queryTypeError = document.getElementById('query-type-error');
    const generalEnquiry = document.getElementById('general-enquiry');
    const supportRequest = document.getElementById('support-request');
    if (!generalEnquiry.checked && !supportRequest.checked) {
        queryTypeError.textContent = 'Please select a query type';
        isValid = false;
    } else {
        queryTypeError.textContent ='';
    }

    const message = document.getElementById('message');
    const messageError = document.getElementById('message-error');
    if (!message.value.trim()) {
        messageError.textContent = 'This field is required';
        message.classList.add('input-error');
        isValid = false;
    } else {
        message.classList.remove('input-error');
        messageError.textContent = '';
    }


    const checkbox = document.getElementById('checkbox');
    const checkboxError = document.getElementById('checkbox-error');
    if (!checkbox.checked) {
        checkboxError.textContent = 'To submit this form, please consent to being contacted';
        isValid = false;
    } else {
        checkboxError.textContent = '';
    }

    if (isValid) {
        alert("Message Sent!Thanks for completing the form. We'll be in touch soon!")
        this.submit();
    }

});