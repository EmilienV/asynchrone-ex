let btn = document.querySelector("button");
btn.addEventListener("click", jsonCaller);

function jsonCaller() {
  let ul = document.createElement("ul");
  document.body.appendChild(ul);
  fetch("your-json-file.json")
    .then((response) => response.json())
    .then((data) => {
      data.forEach((element) => {
        const li = document.createElement("li");
        li.textContent = element;
        ul.appendChild(li);
      });
    })
    .catch((error) => {
      console.log("There was an error!", error);
    });
}
