document.addEventListener("DOMContentLoaded", () => {
    // Set current year in footer
document.getElementById("currentYear").textContent = new Date().getFullYear()
// Mobile menu toggle
const mobileMenuBtn = document.getElementById("mobile-menu-btn")
const mobileMenu = document.getElementById("mobile-menu")
if (mobileMenuBtn && mobileMenu) {
  mobileMenuBtn.addEventListener("click", () => {
    if (mobileMenu.style.display === "block") {
      mobileMenu.style.display = "none"
      mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>'
    } else {
      mobileMenu.style.display = "block"
      mobileMenuBtn.innerHTML = '<i class="fas fa-times"></i>'
    }
  })
  // Close mobile menu when clicking on a link
  const mobileNavLinks = document.querySelectorAll(".mobile-nav-link")
  mobileNavLinks.forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.style.display = "none"
      mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>'
    })
  })
}

// Event tabs functionality
const tabBtns = document.querySelectorAll(".tab-btn")
const tabContents = document.querySelectorAll(".tab-content")
if (tabBtns.length > 0 && tabContents.length > 0) {
  tabBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      // Remove active class from all buttons and contents
      tabBtns.forEach((b) => b.classList.remove("active"))
      tabContents.forEach((c) => c.classList.remove("active"))
      // Add active class to clicked button and corresponding content
      btn.classList.add("active")
      const tabId = btn.getAttribute("data-tab")
      document.getElementById(`${tabId}-tab`).classList.add("active")
    })
  })
}
// Contact form submission
const contactForm = document.getElementById("contactForm")
const formSuccess = document.getElementById("formSuccess")
const sendAnother = document.getElementById("sendAnother")
if (contactForm && formSuccess && sendAnother) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault()
    // Simulate form submission with a delay
    setTimeout(() => {
      contactForm.style.display = "none"
      formSuccess.classList.add("active")
    }, 1000)
  })
  sendAnother.addEventListener("click", () => {
    formSuccess.classList.remove("active")
    contactForm.style.display = "grid"
    contactForm.reset()
  })
}

const themeToggle = document.getElementById("themeToggle");
const icon = themeToggle.querySelector("i");

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun");
  } else {
    icon.classList.remove("fa-sun");
    icon.classList.add("fa-moon");
  }
});

});
