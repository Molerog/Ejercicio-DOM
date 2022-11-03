import erase from "./eraseData.js";


const d = document;
const $divContainer = d.createElement("div");

export default function printData(element, tag) {
  $divContainer.classList.add("card-container");
  const data = JSON.parse(localStorage.getItem("user"));
  $divContainer.innerHTML = "";
  let id = 1;
  data.forEach((e) => {
    $divContainer.innerHTML += `
    <div class='cards shadow'>  
    <img class='image-cards' src=${e.image}>
      <div class='name-age-comments'>
        <p><strong>Nombre:</strong></p>
        <div>${e.name}</div>
        <p><strong>Edad:</strong></p>
        <div>${e.age}</div>
        <p><strong>Comentario:</strong></p>
        <div>${e.comments}</div>
      </div> 
      <div class='buttons'>
      <button data-id=${id} class="erase-button">Eliminar
      </button>   
      </div>
    `;
    id++;
  });
  if (element.firstChild == tag) {
    element.replaceChild($divContainer, tag);
  } 
  const $eraseButton = d.querySelectorAll(".erase-button");
  erase($eraseButton, element, tag, $divContainer);

}
