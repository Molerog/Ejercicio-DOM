export default function toLocalStorage(obj) {
  let myArr = JSON.parse(localStorage.getItem("user")) || [];
  myArr.push(obj);
  localStorage.setItem("user", JSON.stringify(myArr));
}
