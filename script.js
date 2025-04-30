function validateForm() {
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let rating = document.getElementById("rating").value;
    let comments = document.getElementById("comments").value.trim();
    let errorMessage = document.getElementById("error-message");

    // Reset error message
    errorMessage.innerHTML = "";
    
    if (name === "") {
        errorMessage.innerHTML = "Please enter your name.";
        return false;
    }
    if (!/^[a-zA-Z]+$/.test(name)){
        errorMessage.innerHTML = "Name should contain letters only.";
        return false;
    }

    let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
        errorMessage.innerHTML = "Please enter a valid email address.";
        return false;
    }

    if (rating === "") {
        errorMessage.innerHTML = "Please select a rating.";
        return false;
    }

    if (comments.length < 10) {
        errorMessage.innerHTML = "Comments must be at least 10 characters long.";
        return false;
    }

    return true;
}

