const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

// Animation Logic
signUpButton.addEventListener('click', () => {
    container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
    container.classList.remove("right-panel-active");
});

// IND CODER'S AI - Validation Logic

// Sign Up Validation
const signUpForm = document.getElementById('signUpForm');
signUpForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Stop actual submission for demo
    const name = document.getElementById('upName').value;
    const email = document.getElementById('upEmail').value;
    const pass = document.getElementById('upPass').value;
    const errorMsg = document.getElementById('upError');

    if(name === '' || email === '' || pass === '') {
        errorMsg.innerText = "All fields are required for IND CODER'S AI access.";
        return;
    }
    if(pass.length < 6) {
        errorMsg.innerText = "Password must be at least 6 characters.";
        return;
    }
    
    // If valid:
    errorMsg.style.color = "green";
    errorMsg.innerText = "Account created successfully! (Simulated)";
    console.log("Registering:", name, email);
    // Here you would normally send data to backend
});

// Sign In Validation
const signInForm = document.getElementById('signInForm');
signInForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Stop actual submission for demo
    const email = document.getElementById('inEmail').value;
    const pass = document.getElementById('inPass').value;
    const errorMsg = document.getElementById('inError');

    if(email === '' || pass === '') {
        errorMsg.innerText = "Please enter both email and password.";
        return;
    }
    
    // If valid:
    errorMsg.style.color = "green";
    errorMsg.innerText = "Logging in... Welcome to IND CODER'S AI";
    
    // Redirect logic would go here
    setTimeout(() => {
        window.location.href = "index.html"; // Redirects back to your main AI page
    }, 1500);
});
