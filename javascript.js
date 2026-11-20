
// MOBILMENÜ

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", function () {
    navMenu.classList.toggle("active");

    const isOpen = navMenu.classList.contains("active");

    menuToggle.setAttribute("aria-expanded", isOpen);
    menuToggle.textContent = isOpen ? "✕" : "☰";
});


// MENÜ BEZÁRÁSA KATTINTÁS UTÁN

const navLinks = document.querySelectorAll(".nav-menu a");

navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        navMenu.classList.remove("active");
        menuToggle.textContent = "☰";
        menuToggle.setAttribute("aria-expanded", "false");
    });
});


// AKTUÁLIS ÉVSZÁM

const currentYear = document.getElementById("currentYear");

currentYear.textContent = new Date().getFullYear();


// KAPCSOLATI ŰRLAP

const contactForm = document.getElementById("contactForm");
const submitButton = document.getElementById("submitButton");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", function () {

    // A böngésző a HTML required és email
    // ellenőrzéseket előtte automatikusan elvégzi.

    submitButton.disabled = true;
    submitButton.textContent = "Küldés folyamatban...";

    formMessage.textContent = "Az üzenet elküldése folyamatban van.";
    formMessage.className = "";
});
