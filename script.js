feather.replace();

const sections = document.querySelectorAll("section, footer");

// Cek apakah di GitHub Pages atau lokal
const isGithubPages = window.location.hostname === "sendyaudit.github.io";

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && isGithubPages) {
        const id = entry.target.id;
        history.pushState(null, "", "/my-profile/" + id);
      }
    });
  },
  { threshold: 0.5 },
);

sections.forEach((section) => observer.observe(section));

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (e) => {
    const id = link.getAttribute("href").replace("#", "");
    const target = document.getElementById(id);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });
      if (isGithubPages) {
        history.pushState(null, "", "/my-profile/" + id);
      }
    }
  });
});

function scrollTable(amount) {
  const container = document.getElementById("tableContainer");
  container.scrollBy({ left: amount, behavior: "smooth" });
}
