// Mobile Menu
const header = document.querySelector(".header");
const btnMobileNav = document.querySelector(".btn-mobile-nav");

btnMobileNav.addEventListener("click", () => {
  header.classList.toggle("nav-open");
});

// Copyright Year
const year = document.querySelector(".year");
const date = new Date();
const currentYear = date.getFullYear();
year.textContent = currentYear;

// Sticky Navigation
const sectionHeroEl = document.querySelector(".section-hero");
const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);
    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    }
    if (ent.isIntersecting) {
      document.body.classList.remove("sticky");
    }
  },
  {
    // In the viewport
    root: null,
    threshold: 0,
    rootMargin: '-80px',
  }
);
obs.observe(sectionHeroEl);





// Smooth Scroll Behaviour

const allLinks = document.querySelectorAll("a:link");
allLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const href = link.getAttribute("href");

    // Scroll back to top
    if (href === "#")
      window.scroll({
        top: 0,
        behavior: "smooth",
      });

    // Scroll to other links
    if (href != "#" && href.startsWith("#")) {
      const section = document.querySelector(href);
      section.scrollIntoView({
        behavior: "smooth",
      });
    }
    // Close mobile navigation
    if (link.classList.contains("main-nav-links")) {
      header.classList.toggle("nav-open");
    }
  });
});
