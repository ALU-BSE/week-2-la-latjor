// Theme toggle functionality
function toggleTheme() {
  const body = document.body;
  const toggleBtn = document.querySelector(".theme-toggle");

  body.classList.toggle("dark-mode");

  if (body.classList.contains("dark-mode")) {
    toggleBtn.textContent = "☀️";
    localStorage.setItem("theme", "dark");
  } else {
    toggleBtn.textContent = "🌙";
    localStorage.setItem("theme", "light");
  }
}

// Load saved theme
window.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");
  const toggleBtn = document.querySelector(".theme-toggle");

  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
    toggleBtn.textContent = "☀️";
  }
});

// Scroll to top functionality
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

// Show/hide scroll to top button
window.addEventListener("scroll", () => {
  const scrollBtn = document.querySelector(".scroll-top");
  if (window.pageYOffset > 300) {
    scrollBtn.classList.add("visible");
  } else {
    scrollBtn.classList.remove("visible");
  }
});

// Add loading state to pagination links
document.querySelectorAll(".pagination a, .search-form").forEach((element) => {
  element.addEventListener("click", () => {
    document.getElementById("loadingOverlay").style.display = "flex";
  });
});

// Enhanced search functionality
const searchInput = document.querySelector(".search-input");
let searchTimeout;

searchInput?.addEventListener("input", (e) => {
  clearTimeout(searchTimeout);
  const query = e.target.value;

  if (query.length > 2) {
    searchTimeout = setTimeout(() => {
      // Add visual feedback for search suggestions
      console.log("Searching for:", query);
    }, 300);
  }
});
