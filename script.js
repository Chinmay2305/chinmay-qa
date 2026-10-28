// Small interactions for the portfolio. No frameworks or build step required.
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Open navigation");
    });
  });
}

const year = document.querySelector("#year");
if (year) year.textContent = new Date().getFullYear();

// Replace placeholder URLs in index.html with your own links before publishing.
document.querySelectorAll("[data-placeholder-link]").forEach((link) => {
  link.addEventListener("click", (event) => {
    const url = link.getAttribute("href") || "";
    if (url === "https://github.com/" || url === "https://www.linkedin.com/") {
      // Keep navigation working while reminding you to personalize generic links.
      event.preventDefault();
      alert("Please edit this link in index.html and add your own profile or project URL.");
    }
  });
});

const emailLink = document.querySelector("[data-email-link]");
if (emailLink && emailLink.href.includes("replace-with-your-email")) {
  emailLink.addEventListener("click", (event) => {
    event.preventDefault();
    alert("Please replace the sample email address in index.html with your professional email.");
  });
}
