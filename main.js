/*LOG IN AND SIGN UP JS HAHAHAHA*/

document.addEventListener('DOMContentLoaded', () => {
    // UNIVERSAL EYE LOGIC - works everywhere
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('eye-icon') || e.target.id === 'eye-icon') {
            const eye = e.target;
            const input = eye.parentElement.querySelector('input');
            if (input) {
                const isPassword = input.type === 'password';
                input.type = isPassword ? 'text' : 'password';
                eye.style.backgroundImage = isPassword ? "url('show.png')" : "url('hide.png')";
            }
        }
    });

    const authForm = document.getElementById('auth-form');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const emailError = document.querySelector('.error-message');

    if (authForm) {
        authForm.addEventListener('submit', (e) => {
            e.preventDefault(); 
            let reasons = [];
            const emailValue = emailInput.value.trim();
            const passValue = passwordInput.value;

            if (!emailValue.includes('@') || !emailValue.includes('.')) reasons.push("a valid email");
            if (passValue.length < 8) reasons.push("at least 8 character password");

            if (reasons.length > 0) {
                emailError.textContent = "Please enter " + reasons.join(" and ");
                emailError.style.display = 'block';
            } else {
                emailError.style.display = 'none';
                window.location.href = 'Dashboard.html';
            }
        });

        [emailInput, passwordInput].forEach(input => {
            input.addEventListener('input', () => {
                emailError.style.display = 'none';
            });
        });
    }

    /*FORGOT PASSWORD LOGIC*/
    const forgotForm = document.getElementById('forgot-form');
    const resetEmailInput = document.getElementById('reset-email');

    if (forgotForm && resetEmailInput) {
        const errorSpan = forgotForm.querySelector('.error-message');

        forgotForm.addEventListener('submit', function(e) {
            e.preventDefault(); 
            const emailValue = resetEmailInput.value.trim();

            if (!emailValue.includes('@') || !emailValue.includes('.')) {
                errorSpan.textContent = "Please enter a valid email";
                errorSpan.style.color = "indianred"; 
                errorSpan.style.backgroundColor = "rgba(255, 0, 0, 0.05)"; 
                errorSpan.style.display = 'block';
            } else {
                errorSpan.textContent = "The reset link has been emailed to you.";
                errorSpan.style.color = "green"; 
                errorSpan.style.backgroundColor = "rgba(0, 255, 0, 0.05)";
                errorSpan.style.display = 'block';
            }
        });

        resetEmailInput.addEventListener('input', () => {
            errorSpan.style.display = 'none';
        });
    }

    /*RESET PASSWORD VALIDATION*/
    const resetForm = document.getElementById('reset-form');

    if (resetForm) {
        const pass1 = document.getElementById('new-password');
        const pass2 = document.getElementById('confirm-password');
        const errorSpan = resetForm.querySelector('.error-message');

        resetForm.addEventListener('submit', (e) => {
            e.preventDefault();
            if (pass1.value.length < 8) {
                errorSpan.textContent = "Password must be at least 8 characters";
                errorSpan.style.display = "block";
            } else if (pass1.value !== pass2.value) {
                errorSpan.textContent = "Passwords do not match";
                errorSpan.style.display = "block";
            } else {
                document.title="Redirecting...";
                errorSpan.textContent = "Password updated! Redirecting to login...";
                errorSpan.style.color = "#2e7d32";
                errorSpan.style.backgroundColor = "rgba(0, 255, 0, 0.05)";
                errorSpan.style.display = "block";
                setTimeout(() => { window.location.href = 'login.html'; }, 1500);
            }
        });

        [pass1, pass2].forEach(input => {
            if (input) {
                input.addEventListener('input', () => {
                    errorSpan.style.display = "none";
                });
            }
        });
    }
});
