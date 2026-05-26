 function validate(){
            let email = document.getElementById('email').value;
            if (email == "")
            {
                alert("Enter your email");
            }
            let regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$/;
            if(regex.test(email))
            {
                alert("Valid email");
            }
            else
            {
                alert("Invalid email");
            }
            let password = document.getElementById('password').value;
            if (password == "")
            {
                alert("Enter your password");
            }
            else if (password.length < 8)
            {
                alert("Password must be at least 8 characters long");
            }
}