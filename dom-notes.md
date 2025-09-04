# 📚 Session 3 - DOM and Events Overview

## 🧾 Objectives

In this session, we practiced using JavaScript to interact with the HTML document using the **DOM (Document Object Model)**. We learned to:

- Select HTML elements using different DOM methods
- Listen for user interactions (events)
- Update element content (text)
- Add, remove, and toggle CSS classes dynamically

---

## 🧠 What is the DOM?

> The **Document Object Model (DOM)** is a programming interface for web documents. It represents the page structure as a tree of objects that JavaScript can manipulate.

Learn more here 👉 [MDN DOM Introduction](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction)

---

## 🛠 Tasks Completed

### 1. **Select Elements**
We used various DOM methods to select elements:
```
document.getElementById("id");
document.querySelector(".class");
document.querySelectorAll("tag");

2. Listen to Events
We attached event listeners to respond to user actions:

element.addEventListener("click", function);
element.addEventListener("mouseover", function);
element.addEventListener("keyup", function);
element.addEventListener("dblclick", function);

3. Update Text Content
We modified the text of elements using:

element.textContent = "New text";

4. Update CSS Classes
We added, removed, or toggled CSS classes:

element.classList.add("classname");
element.classList.remove("classname");
element.classList.toggle("classname");

```

📚 Resources
MDN DOM Intro : https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction
MDN Event Reference : https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Events
