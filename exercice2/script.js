const fetchName = () => {
  let name = document.querySelector("input").value;
  let country = document.querySelector("#countrySelect").value;
  return fetch(
    "https://api.agify.io/?name=" + name + "&country_id=" + country
  ).then((response) => response.json());
};

let btn = document.querySelector("button");
btn.addEventListener("click", () => {
  fetchName()
    .then((data) => {
      const div = document.createElement("div");
      div.textContent =
        "Name: " + data.name + ", Age: " + data.age + ", Count: " + data.count;
      document.body.appendChild(div);
    })
    .catch((error) => {
      console.log("There was an error!", error);
    });
});
