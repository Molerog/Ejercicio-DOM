const $picture = new Image();
$picture.setAttribute("src", "./assets/headerPic.png");
const $tagPhraseHeader = document.createElement("span");
const $phrase = document.createTextNode("Ejercicio de repaso");
$tagPhraseHeader.appendChild($phrase);

export const navList = {
  $tagPhraseHeader,
  $picture,
};


