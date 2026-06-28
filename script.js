// Feather icons
feather.replace();

// URL bersih tanpa #
const sections = document.querySelectorAll("section, footer");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        history.pushState(
          null,
          "",
          window.location.pathname.split("/").slice(0, -1).join("/") + "/" + id,
        );
      }
    });
  },
  { threshold: 0.5 },
);

sections.forEach((section) => observer.observe(section));

// Klik navbar scroll smooth
document.querySelectorAll('a[href^="/"]').forEach((link) => {
  link.addEventListener("click", (e) => {
    const id = link.getAttribute("href").replace("/", "");
    const target = document.getElementById(id);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });
      history.pushState(
        null,
        "",
        window.location.pathname.split("/").slice(0, -1).join("/") + "/" + id,
      );
    }
  });
});
