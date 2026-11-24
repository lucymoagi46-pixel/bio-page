const projects = [
  {
    title: "Bio Page",
    description: "My first HTML and CSS page.",
    category: "HTML"
  },
  {
    title: "Responsive Nav",
    description: "A flexbox nav bar that adapts.",
    category: "CSS"
  },
  {
    title: "Grid Gallery",
    description: "Cards laid out with CSS Grid.",
    category: "CSS"
  },
  {
    title: "Contact Form",
    description: "A form with validation.",
    category: "HTML"
  }
];

console.log(projects[0].title);

// Change "#projectsGrid" to "#projects-grid" if your HTML uses hyphens
const grid = document.querySelector("#projectsGrid");
const filterButtons = document.querySelectorAll(".filter-btn");

function renderProjects(selectedCategory) {
  grid.innerHTML = "";

  const filteredProjects = selectedCategory === "All"
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  filteredProjects.forEach(function (project) {
    const card = document.createElement("div");
    card.className = "project-card";
    card.innerHTML =
      "<h3>" + project.title + "</h3>" +
      "<p>" + project.description + "</p>" +
      '<span class="badge">' + project.category + "</span>";
    grid.appendChild(card);
  });
}

filterButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    filterButtons.forEach(function (btn) {
      btn.classList.remove("active");
    });
    button.classList.add("active");

    const category = button.getAttribute("data-category");
    renderProjects(category);
  });
});

// Initial render on page load
renderProjects("All");

const form = document.querySelector("#contactForm");
const message = document.querySelector("#formMessage");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.querySelector("#name").value.trim();
  const text = document.querySelector("#message").value.trim();

  if (name === "" || text.length < 10) {
    message.textContent = "Please enter your name and a message of at least 10 characters.";
    return;
  }

  message.textContent = "Thanks, " + name + "! Your message was received.";
  form.reset();
});

const darkModeToggle = document.querySelector("#darkModeToggle");

darkModeToggle.addEventListener("click", function () {
  const isDark = document.body.classList.toggle("dark");
  darkModeToggle.textContent = isDark ? "Light Mode" : "Dark Mode";
});