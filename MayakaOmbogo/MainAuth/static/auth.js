// Google OAuth handling
function handleGoogleLogin(response) {
    const credential = response.credential;
    // Handle the Google sign-in response
    console.log('Google login successful');
    // Add your login logic here
    window.location.href = 'C:\Dev\GoogleAuth\MayakaOmbogo\MainAuth\templates\MainAuth\home.html';
}

function handleGoogleSignup(response) {
    const credential = response.credential;
    // Handle the Google sign-up response
    console.log('Google signup successful');
    // Add your signup logic here
    window.location.href = 'C:\Dev\GoogleAuth\MayakaOmbogo\MainAuth\templates\MainAuth\home.html';
}

// Regular authentication handling
const loginForm = document.getElementById('login-form');
if (loginForm) {
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        // Add your login logic here
        console.log('Login form submitted');
        window.location.href = 'C:\Dev\GoogleAuth\MayakaOmbogo\MainAuth\templates\MainAuth\home.html';
    });
}

const signupForm = document.getElementById('signup-form');
if (signupForm) {
    signupForm.addEventListener('submit', function(e) {
        e.preventDefault();
        // Add your signup logic here
        console.log('Signup form submitted');
        window.location.href = 'C:\Dev\GoogleAuth\MayakaOmbogo\MainAuth\templates\MainAuth\home.html';
    });
}