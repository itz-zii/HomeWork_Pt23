    const form = document.getElementById("signupForm");

    form.addEventListener("submit", function(event) {
      event.preventDefault();
      let isValid = true;

      const username = document.getElementById("username");
      const email = document.getElementById("email");
      const password = document.getElementById("password");
      const confirm = document.getElementById("confirm");

      document.querySelectorAll(".error-message").forEach(el => el.textContent = "");
      document.querySelectorAll("input").forEach(el => el.classList.remove("error"));

      if (username.value.trim() === "") {
        document.getElementById("userError").textContent = "Username cannot be blank";
        username.classList.add("error");
        isValid = false;
      }

      if (email.value.trim() === "" || !email.value.includes("@")) {
        document.getElementById("emailError").textContent = "Please enter valid email address";
        email.classList.add("error");
        isValid = false;
      }

      if (password.value.trim() === "") {
        document.getElementById("passError").textContent = "Password cannot be blank";
        password.classList.add("error");
        isValid = false;
      }

      if (confirm.value.trim() === "") {
        document.getElementById("confirmError").textContent = "Password confirmation required";
        confirm.classList.add("error");
        isValid = false;
      } else if (confirm.value !== password.value) {
        document.getElementById("confirmError").textContent = "Passwords do not match";
        confirm.classList.add("error");
        isValid = false;
      }
    });