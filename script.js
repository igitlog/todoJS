// Create a "close" button and append it to each list item
const Nodelist = document.querySelectorAll(".todo-item");
for (let item = 0; item < Nodelist.length; item++) {
  const span = document.createElement("SPAN");
  const txt = document.createTextNode("x");
  span.className = "close";
  span.appendChild(txt);
  Nodelist[item].appendChild(span);
}
// Create listener for events
window.onload = function () {
  document.addEventListener("click", documentAction);
  
  // Actions
  function documentAction(e) {
    const targetElement = e.target;

    // Burger action
    if (targetElement.classList.contains('header__burger-icon')) {
      document.querySelector('.header__burger-icon').classList.toggle('active');
      document.querySelector('.menu').classList.toggle('active');
    }

    // Click on a close button to hide the current list item
    if (targetElement.classList.contains('close')) {
      targetElement.parentElement.remove();

    }
    if (targetElement.classList.contains('todo-item')) {
      targetElement.classList.toggle('checked');
    }

    // Create a new list item when clicking on the "Add" button
    if (targetElement.classList.contains('add-btn')) {
      const li = document.createElement("li");
      const inputValue = document.getElementById("input").value;
      const text = document.createTextNode(inputValue);
      li.appendChild(text);
      li.classList.add('todo-item');
      const span = document.createElement("SPAN");
      const txt = document.createTextNode("x");
      span.className = "close";
      span.appendChild(txt);
      li.appendChild(span);

      if (inputValue === '') {
        alert("Write something!");
      } else {
        document.getElementById("todo-list").appendChild(li);
      }
      document.getElementById("input").value = "";
    }
  }
};