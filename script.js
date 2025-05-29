// Smooth scroll for nav links
document.querySelectorAll(".nav-items a").forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
  
  // Resume view/download functionality
  document.querySelectorAll("#btn").forEach(button => {
    button.addEventListener("click", () => {
      window.open("https://drive.google.com/file/d/1U8JqrJTAGsCJBYw29n8MJS40H0vvjJKP/view?usp=drive_link", "_blank");
    });
  });
  
  // GitHub buttons based on data-project attribute
  document.querySelectorAll(".btn-project").forEach(button => {
    button.addEventListener("click", (e) => {
      const project = e.target.dataset.project;
      let githubLink = "https://github.com/pritamchaudhary";
  
      switch (project) {
        case "real-estate":
          githubLink = "https://github.com/pritamchaudhary/real-estate";
          break;
        case "collegetips":
          githubLink = "https://github.com/pritamchaudhary/collegetips-task/tree/main/collegetips-gallery";
          break;
        case "weather":
          githubLink = "https://github.com/pritamchaudhary/Weather-App";
          break;
        case "password":
          githubLink = "https://github.com/pritamchaudhary/Password-Generator";
          break;
      }
  
      window.open(githubLink, "_blank");
    });
  });
  
  // Contact form submission (console only)
  document.querySelector(".form")?.addEventListener("submit", function (e) {
    e.preventDefault();
    const name = this.querySelector("input[name='name']").value;
    const email = this.querySelector("input[name='email']").value;
    const message = this.querySelector("textarea[name='message']").value;
  
    console.log("Form Submitted:", { name, email, message });
  
    alert("Thanks for your message, Pritam will get back to you soon!");
  });
  