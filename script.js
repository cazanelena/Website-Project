const button = document.querySelector(".btn");
const switchBtn = document.querySelector("#theme");

switchBtn.addEventListener("click", (e) => {
  const currentMode = document.body.dataset.mode;
  if (currentMode === "light") {
    document.documentElement.style.setProperty("--primary-color", "#f0ece2");
    document.documentElement.style.setProperty("--secondary-color", "#c7b198");
    document.documentElement.style.setProperty("--dark-orange", "#c24d2c");
    document.documentElement.style.setProperty("--dark-blue", "#596e79");
    document.documentElement.style.setProperty("--white", "#ffffff");
    document.documentElement.style.setProperty("--black", "#000000");
    document.body.dataset.mode = "dark";
    e.target.innerHTML = "Dark Mode";
  } else if (currentMode === "dark") {
    document.documentElement.style.setProperty("--primary-color", "#34495e");
    document.documentElement.style.setProperty("--secondary-color", "#8dc6ff");
    document.documentElement.style.setProperty("--dark-orange", "#e4f1fe");
    document.documentElement.style.setProperty("--dark-blue", "#1a2639");
    document.documentElement.style.setProperty("--white", "#000000");
    document.documentElement.style.setProperty("--black", "#ffffff");
    document.body.dataset.mode = "light";
    e.target.innerHTML = "Light Mode";
  }
});

const displayButton = () => {
  window.addEventListener("scroll", () => {
    console.log(window.scrollY);

    if (window.scrollY > 200) {
      button.style.display = "block";
    } else {
      button.style.display = "none";
    }
  });
};

const scrollToTop = () => {
  button.addEventListener("click", () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
    console.log(event);
  });
};

displayButton();
scrollToTop();
