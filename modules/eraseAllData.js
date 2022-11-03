import printData from "./printData.js";

const d = document;

export default function eraseAll(btn) {
  d.addEventListener("click", (e) => {
    if (e.target.matches(btn)) {
      e.preventDefault();
      localStorage.removeItem("user");
      printData();
    }
  });
}
