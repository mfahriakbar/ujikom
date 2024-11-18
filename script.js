function validateLogin(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === "fahri" && password === "fahri") {
        window.location.href = "kalkulator/kalkulator.html";
    } else {
        alert("Invalid username or password!");
    }

    return false;
}

function togglePassword() {
    const passwordInput = document.getElementById('password');
    const passwordToggleIcon = document.getElementById('toggle-password');

    // Toggle the password visibility
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        passwordToggleIcon.name = "eye-off-outline";  // Change icon to "eye-off" when password is visible
    } else {
        passwordInput.type = "password";
        passwordToggleIcon.name = "eye-outline";  // Change icon back to "eye" when password is hidden
    }
}
