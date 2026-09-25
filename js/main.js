// ================= THEME TOGGLE =================
const toggleBtn = document.getElementById("themeToggle");
const body = document.body;
const icon = toggleBtn ? toggleBtn.querySelector("i") : null;

// Load saved theme
const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  body.className = savedTheme;
  if (icon) {
    icon.className = savedTheme === "dark-mode" ? "bi bi-moon-stars-fill" : "bi bi-sun-fill";
  }
}

// Toggle theme
if (toggleBtn) {
  toggleBtn.addEventListener("click", () => {
    if (body.classList.contains("dark-mode")) {
      body.classList.replace("dark-mode", "light-mode");
      if (icon) icon.className = "bi bi-sun-fill";
      localStorage.setItem("theme", "light-mode");
    } else {
      body.classList.replace("light-mode", "dark-mode");
      if (icon) icon.className = "bi bi-moon-stars-fill";
      localStorage.setItem("theme", "dark-mode");
    }
  });
}


// ================= ABOUT TABS =================
const tabButtons = document.querySelectorAll(".tab-btn");
const tabContents = document.querySelectorAll(".tab-content");

tabButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    tabButtons.forEach(b => b.classList.remove("active"));
    tabContents.forEach(c => c.classList.remove("active"));
    btn.classList.add("active");
    document.getElementById(btn.dataset.tab).classList.add("active");
  });
});

// ================= AUTO CLOSE MOBILE NAVBAR =================
const navLinks = document.querySelectorAll('.nav-link');
const menuToggle = document.getElementById('mainNavbar');
const bsCollapse = new bootstrap.Collapse(menuToggle, {toggle: false});

navLinks.forEach(function (l) {
  l.addEventListener('click', function () {
    if (menuToggle.classList.contains('show')) {
      bsCollapse.toggle();
    }
  });
});
