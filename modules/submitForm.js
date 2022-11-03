import toLocalStorage from "./localStorage.js";
import printData from "./printData.js";


const d = document;
export default function submitForm(img, container, tag) {
  d.addEventListener("submit", (e) => {
    e.preventDefault();
    let picture = img.getAttribute("src");
    const data = new FormData(e.target);
    const inputs = [...data.entries()];
    const inputsObj = Object.fromEntries(inputs);
    const formObj = {
      ...inputsObj,
      image: picture,
    };
    toLocalStorage(formObj);
    printData(container, tag);
  });
}
