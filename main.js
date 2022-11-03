import { navList } from "./modules/data/navBarElements.js";
import { picArray } from "./modules/data/pictures.js";
import { legoCharacters } from "./modules/data/slider.js";
import slider from "./modules/data/slider.js";
import contactFormValidations from "./modules/validationForm.js";
import submitForm from "./modules/submitForm.js";
import eraseAll from "./modules/eraseAllData.js";


const d = document;
const $body = d.body;
const $header = d.createElement("header");
const $nav = d.createElement("nav");
const $ul = d.createElement("ul");
const $li = d.createElement("li");
const $main = d.createElement("main");
const $footer = d.createElement("footer");
const $divMainSon1 = d.createElement("div");
const $divMainSon2 = d.createElement("div");
const $img = d.createElement("img");
const $form = d.createElement("form");
const $inputName = d.createElement("input");
const $inputAge = d.createElement("input");
const $description = d.createElement("textarea");
const $legend = d.createElement("legend");
const $legendContent = d.createTextNode("Crea tu tarjeta");
const $imageSelection = d.createElement("img");
const $divSlider = d.createElement("div");
const $prevSlide = d.createElement("a");
const $nextSlide = d.createElement("a");
const $submit = d.createElement("input");
const $eraseButtonAll = d.createElement('button');
const $textButtonErase = d.createTextNode('Eliminar todo');

$legend.appendChild($legendContent);
$inputName.setAttribute("type", "text");
$inputName.setAttribute("name", "name");
$inputName.setAttribute(
  "title",
  "Nombre solo acepta letras y espacios en blanco"
);

$inputName.setAttribute("pattern", "^[A-Za-zÑñÁáÉéÍíÓóÚúÜüs]+$");
$inputName.setAttribute("placeholder", "Escribe tu nombre");
$inputName.setAttribute("required", "");
$inputAge.setAttribute("type", "number");
$inputAge.setAttribute("name", "age");
$inputAge.setAttribute("pattern", "^(?:1[01][0-9]|120|1[7-9]|[2-9][0-9])$");
$inputAge.setAttribute("title", "Los menores de edad no juegan");
$inputAge.setAttribute("placeholder", "Indica tu edad");
$inputAge.setAttribute("required", "");
$divSlider.classList.add("slider-container");
$description.setAttribute("name", "comments");
$description.setAttribute("cols", "50");
$description.setAttribute("rows", "5");
$description.setAttribute(
  "title",
  "Tu comentario no debe exceder los 50 caracteres"
);
$description.setAttribute("data-pattern", "^.{1,50}$");
$description.setAttribute("placeholder", "Háblanos un poco de ti");
$description.setAttribute("required", "");
$submit.setAttribute("type", "submit");
$submit.setAttribute("value", "Enviar");
$inputName.classList.add("form");
$inputAge.classList.add("form");
$prevSlide.classList.add("prev");
$prevSlide.innerHTML = '<a class="prev">&#10094;</a>';
$nextSlide.classList.add("next");
$nextSlide.innerHTML = '<a class="next">&#10095;</a>';
$body.insertAdjacentElement("afterbegin", $header);
$header.insertAdjacentElement("afterend", $main);
$main.insertAdjacentElement("afterend", $footer);
$header.classList.add("header-container");
$main.classList.add("main-general-container");
$footer.classList.add("footer-container");
$divMainSon1.classList.add("main-left-container");
$divMainSon2.classList.add("main-right-container");
$submit.classList.add("button-submit");
$eraseButtonAll.classList.add('d-none');
$eraseButtonAll.appendChild($textButtonErase);
$footer.appendChild($eraseButtonAll)

$header.appendChild($nav);
$nav.appendChild($ul);
$ul.appendChild($li);
for (let key in navList) {
  $li.appendChild(navList[key]);
}
$main.appendChild($divMainSon1);
$main.appendChild($divMainSon2);
$img.setAttribute("src", picArray[0]);
$divMainSon2.appendChild($img);
$divMainSon1.appendChild($form);
$form.appendChild($legend);
$form.appendChild($inputName);
$form.appendChild($inputAge);
$form.appendChild($divSlider);
$divSlider.appendChild($prevSlide);
$divSlider.appendChild($imageSelection);
$divSlider.appendChild($nextSlide);
$form.appendChild($description);
$form.appendChild($submit);

d.addEventListener("DOMContentLoaded", () => {
  slider(".prev", ".next", legoCharacters, $imageSelection);
  contactFormValidations($form, $submit);
  submitForm($imageSelection,$divMainSon2,$img);
  eraseAll('.d-none',$divMainSon2,$img);
});


