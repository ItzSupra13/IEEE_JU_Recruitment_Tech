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
  
    // Event filtering functionality
    const categoryFilter = document.getElementById("categoryFilter")
    const chapterFilter = document.getElementById("chapterFilter")
    const searchInput = document.querySelector(".search-input")
    const eventCards = document.querySelectorAll(".event-card-detailed")
  
    if (categoryFilter && chapterFilter && searchInput && eventCards.length > 0) {
      const filterEvents = () => {
        const categoryValue = categoryFilter.value
        const chapterValue = chapterFilter.value
        const searchValue = searchInput.value.toLowerCase()
  
        eventCards.forEach((card) => {
          const category = card.querySelector(".event-badge.primary").textContent.toLowerCase()
          const chapter = card.querySelector(".event-badge.light").textContent.toLowerCase()
          const title = card.querySelector(".event-image-title").textContent.toLowerCase()
          const description = card.querySelector(".event-description p").textContent.toLowerCase()
  
          const matchesCategory = categoryValue === "all" || category.includes(categoryValue.toLowerCase())
          const matchesChapter = chapterValue === "all" || chapter.includes(chapterValue.toLowerCase())
          const matchesSearch = title.includes(searchValue) || description.includes(searchValue)
  
          if (matchesCategory && matchesChapter && matchesSearch) {
            card.style.display = "block"
          } else {
            card.style.display = "none"
          }
        })
      }
  
      categoryFilter.addEventListener("change", filterEvents)
      chapterFilter.addEventListener("change", filterEvents)
      searchInput.addEventListener("input", filterEvents)
    }
  })
  
  