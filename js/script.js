document.addEventListener("DOMContentLoaded", function() {
  const navLinks = document.querySelectorAll(".nav-link, .dropdown-item");
  const tabPanes = document.querySelectorAll(".tab-pane");
  const dropdownButton = document.getElementById("dropdownButton");
  const logo = document.getElementById("logo");

  function showTab(targetId) {
    tabPanes.forEach(pane => {
      pane.style.display = pane.id === targetId ? "block" : "none";
    });
  }

  function resetDefault() {
    showTab("best-suited");
    dropdownButton.innerHTML = `Best Suited For <span class="arrow"><i class="ri-arrow-down-s-line"></i></span>`;
    dropdownButton.classList.add("active");
    document.querySelectorAll(".nav-link").forEach(l => {
      if (l !== dropdownButton) l.classList.remove("active");
    });
  }

  resetDefault(); 

  navLinks.forEach(link => {
    link.addEventListener("click", function(e) {
      e.preventDefault();

      const targetId = this.getAttribute("data-target");
      showTab(targetId);

      if (this.classList.contains("dropdown-item")) {
        dropdownButton.innerHTML = `${this.textContent.trim()} <span class="arrow"><i class="ri-arrow-down-s-line"></i></span>`;
        dropdownButton.classList.add("active");
        document.querySelectorAll(".nav-link").forEach(l => {
          if (l !== dropdownButton) l.classList.remove("active");
        });
      } else {
        dropdownButton.classList.remove("active");
        navLinks.forEach(l => l.classList.remove("active"));
        this.classList.add("active");
      }
    });
  });

  logo.addEventListener("click", function() {
    resetDefault();
  });
});
