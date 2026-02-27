const container = document.getElementById("container");
const toggleBtn = document.getElementById("toggleBtn");
const title = document.getElementById("title");
const desc = document.getElementById("desc");

let isSignup = false;

toggleBtn.addEventListener("click", () => {
    isSignup = !isSignup;

    container.classList.toggle("active");

    toggleBtn.textContent = isSignup ? "Sign In" : "Sign Up";
    title.textContent = isSignup ? "Welcome Back!" : "Hello!";
    desc.textContent = isSignup
        ? "Already have an account?"
        : "New here? Create an account";

    toggleBtn.style.transform = "scale(0.9)";
    setTimeout(() => toggleBtn.style.transform = "scale(1)", 150);
});
