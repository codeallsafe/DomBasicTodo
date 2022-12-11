let inputOne = document.getElementById("inputOne");
const btn_kaydet = document.querySelector("#kaydet");
const btn_sil = document.querySelector("#sil");
const ul = document.querySelector("ul");

btn_kaydet.addEventListener("click", () => {
  let newTask = inputOne.value;
  let uyari = document.querySelector("#uyari");
  if (newTask === "") {
    uyari.innerText = "Lütfen bir görev giriniz... 🤷‍♂️";
  } else {
    let newLi = document.createElement("li");
    newLi.textContent = newTask;
    ul.appendChild(newLi);
    uyari.innerText = "";
  }
  inputOne.value = "";
});

btn_sil.addEventListener("click", () => {
  ul.removeChild(ul.lastElementChild);
});
