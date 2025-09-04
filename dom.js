// Select elements
const title = document.getElementById("title");
const textBtn = document.getElementById("textBtn");
const classBtn = document.getElementById("classBtn");
const box = document.getElementById("box");
const nameInput = document.getElementById("nameInput");
const output = document.getElementById("output");

// Click event
textBtn.addEventListener("click", () => {
  title.textContent = "You clicked the button!";
  title.classList.add("blue");
});

// Mouseover and mouseout events
box.addEventListener("mouseover", () => {
  box.classList.add("hovered");
  box.textContent = "Mouse Over!";
});

box.addEventListener("mouseout", () => {
  box.classList.remove("hovered");
  box.textContent = "Hover over me";
});

// Keyup event on input
nameInput.addEventListener("keyup", (event) => {
  output.textContent = "You typed: " + event.target.value;

  // Update class dynamically
  if (event.target.value.length > 5) {
    output.classList.add("highlight");
  } else {
    output.classList.remove("highlight");
  }
});
