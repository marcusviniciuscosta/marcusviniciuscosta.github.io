document.addEventListener("DOMContentLoaded", function () {
  // Adicionar lazy loading para imagens
  document.querySelectorAll("img").forEach((img) => {
    img.loading = "lazy";
  });

  // Verificar formulário de contato
  const contactForm = document.querySelector(".contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      const nameField = document.getElementById("name");
      const emailField = document.getElementById("email");
      const messageField = document.getElementById("message");

      let isValid = true;

      if (nameField.value.trim() === "") {
        isValid = false;
        highlightField(nameField);
      }

      if (emailField.value.trim() === "" || !isValidEmail(emailField.value)) {
        isValid = false;
        highlightField(emailField);
      }

      if (messageField.value.trim() === "") {
        isValid = false;
        highlightField(messageField);
      }

      if (!isValid) {
        e.preventDefault();
        alert("Por favor, preencha todos os campos corretamente.");
      }
    });
  }

  const menuToggle = document.getElementById("menu-toggle");
  const navList = document.getElementById("nav-list");

  if (menuToggle && navList) {
    menuToggle.addEventListener("click", function () {
      navList.classList.toggle("active");
    });

    // Feche o menu ao clicar em um link
    const navLinks = document.querySelectorAll(".nav-item a");
    navLinks.forEach((link) => {
      link.addEventListener("click", function () {
        if (window.innerWidth <= 768) {
          navList.classList.remove("active");
        }
      });
    });

    // Feche o menu ao redimensionar para desktop
    window.addEventListener("resize", function () {
      if (window.innerWidth > 768) {
        navList.classList.remove("active");
      }
    });
  }

  const backToTopButton = document.getElementById("back-to-top");

  if (backToTopButton) {
    // Função de rolagem suave ao clicar no botão
    backToTopButton.addEventListener("click", function (e) {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  }
});

// Navegação suave
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});
