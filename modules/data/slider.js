export const legoCharacters = [
  "./assets/batman.png",
  "./assets/flash.png",
  "./assets/joker.png",
  "./assets/quinn.png",
  "./assets/robin.png",
  "./assets/superman.png",
  "./assets/wonderWoman.png",
];

export default function slider(prevBtn, nextBtn, arr, tag) {
  let i = 0;
  tag.setAttribute("src", arr[i]);
  document.addEventListener("click", (e) => {
    if (e.target.matches(prevBtn)) {
      e.preventDefault();
      i--;
      if (i < 0) {
        i = arr.length - 1;
      }
      tag.setAttribute("src", arr[i]);
    }
    if (e.target.matches(nextBtn)) {
      e.preventDefault();
      i++;
      if (i > arr.length - 1) {
        i = 0;
      }
      tag.setAttribute("src", arr[i]);
    }
  });
}
