document.addEventListener("DOMContentLoaded", function () {
  const mobileMenuBtn = document.getElementById("mobile-menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");
  const contactForm = document.getElementById("contact-form");

  mobileMenuBtn.addEventListener("click", function () {
    mobileMenu.classList.toggle("hidden");
  });

  const mobileLinks = mobileMenu.querySelectorAll("a");
  mobileLinks.forEach((link) => {
    link.addEventListener("click", function () {
      mobileMenu.classList.add("hidden");
    });
  });

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        const offsetTop = target.offsetTop - 80;
        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        });
      }
    });
  });

  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    alert(
      "Terima kasih! Pesan Anda telah diterima. Kami akan segera menghubungi Anda."
    );

    contactForm.reset();
  });

  const cards = document.querySelectorAll(".card-hover");
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "0";
        entry.target.style.transform = "translateY(20px)";

        setTimeout(() => {
          entry.target.style.transition = "all 0.6s ease";
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
        }, 100);

        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  cards.forEach((card) => {
    observer.observe(card);
  });

  let lastScroll = 0;
  const nav = document.querySelector("nav");

  window.addEventListener("scroll", function () {
    const currentScroll = window.pageYOffset;

    if (currentScroll <= 0) {
      nav.classList.remove("shadow-lg");
      return;
    }

    if (currentScroll > lastScroll && currentScroll > 100) {
      nav.style.transform = "translateY(-100%)";
    } else {
      nav.style.transform = "translateY(0)";
      nav.classList.add("shadow-lg");
    }

    lastScroll = currentScroll;
  });

  nav.style.transition = "transform 0.3s ease, box-shadow 0.3s ease";
});
