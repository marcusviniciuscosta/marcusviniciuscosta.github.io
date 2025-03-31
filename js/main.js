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
