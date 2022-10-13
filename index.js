function validate() {
    let firstName = document.getElementById('first-name').value
    let lastName = document.getElementById('last-name').value
    let email = document.getElementById('email').value
    let city = document.getElementById('city').value
    let state = document.getElementById('state').value
    let zip = document.getElementById('zip').value
    let tnC = document.getElementById('t-and-c').checked
    let error = false

    //Fiest name Validation error message.
    if (firstName.length >= 2) {
        document.getElementById('first-name-valid').style.display = 'block'
        document.getElementById('first-name-invalid').style.display = 'none'
    } else {
        document.getElementById('first-name-invalid').style.display = 'block'
        document.getElementById('first-name-valid').style.display = 'none'
        error = true
    }

    //Last name Validation error message.
    if (lastName.length >= 2) {
        document.getElementById('last-name-valid').style.display = 'block'
        document.getElementById('last-name-invalid').style.display = 'none'
    } else {
        document.getElementById('last-name-invalid').style.display = 'block'
        document.getElementById('last-name-valid').style.display = 'none'
        error = true
    }

    //Email Validation error message.
    if (
        email.includes("@") &&
        email.includes(".") &&
        email.indexOf("@") != 0 &&
        email.length - email.lastIndexOf(".") >= 3
    ) {
        document.getElementById("email-valid").style.display = "block";
        document.getElementById("email-invalid").style.display = "none";
    } else {
        document.getElementById("email-invalid").style.display = "block";
        document.getElementById("email-valid").style.display = "none";
        error = true
    }
    
    //City Validation error message.
    if (city.length >= 3) {
        document.getElementById('city-valid').style.display = 'block'
        document.getElementById('city-invalid').style.display = 'none'
    } else {
        document.getElementById('city-invalid').style.display = 'block'
        document.getElementById('city-valid').style.display = 'none'
        error = true
    }
    
    //State Validation error message.
    if (state != 'None') {
        document.getElementById('state-valid').style.display = 'block'
        document.getElementById('state-invalid').style.display = 'none'
    } else {
        document.getElementById('state-invalid').style.display = 'block'
        document.getElementById('state-valid').style.display = 'none'
        error = true
    }

    //Zip Number Validation error message.
    let zipNumber = parseInt(zip)
    if (zip.length === 6 && !isNaN(zipNumber)) {
        document.getElementById('zip-valid').style.display = 'block'
        document.getElementById('zip-invalid').style.display = 'none'
    } else {
        document.getElementById('zip-invalid').style.display = 'block'
        document.getElementById('zip-valid').style.display = 'none'
        error = true
    }

    //Terms ans conditions Validation error message.
    if (tnC) {
        document.getElementById('t-and-c-invalid').style.display = 'none'
    } else {
        document.getElementById('t-and-c-invalid').style.display = 'block'
        error = true
    }

    //Pop-up msg saved successfully.
    if (!error) {
        alert('Your details have been saved successfully!')

        document.getElementById('registration-form').reset()

        let validFeedbacks = document.getElementsByClassName('valid-feedback')
        for (let i = 0; i < validFeedbacks.length; i++) {
            validFeedbacks[i].style.display = 'none'
        }
        let invalidFeedbacks = document.getElementsByClassName('invalid-feedback')
        for (let i = 0; i < invalidFeedbacks.length; i++) {
            invalidFeedbacks[i].style.display = 'none'
        }
    }
}

