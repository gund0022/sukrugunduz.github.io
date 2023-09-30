document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("login-form");

    loginForm.addEventListener("submit", function(event) {
        event.preventDefault();
        
        const usernameInput = document.getElementById("username");
        const passwordInput = document.getElementById("password");

        const username = usernameInput.value;
        const password = passwordInput.value;

        if (username === "ali@xu.com" && password === "123") {
            window.location.href = "dashboard.html"; // Doğru giriş yapıldığında yönlendirilecek sayfa
        } else {
            alert("Hatalı kullanıcı adı veya şifre. Lütfen tekrar deneyin.");
        }
    });
});
