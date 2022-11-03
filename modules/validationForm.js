const d = document;
export default function contactFormValidations($form, $submit) {
  const $inputs = $form.querySelectorAll("[required]");
  $inputs.forEach((input) => {
    const $span = d.createElement("span");
    $span.id = input.name;
    $span.textContent = input.title;
    $span.classList.add("contact-form-error", "none");
    input.insertAdjacentElement("afterend", $span);
  });

  d.addEventListener("keyup", (e) => {
    if (e.target.matches("[required]")) {
      let $input = e.target,
        pattern = $input.pattern || $input.dataset.pattern;
      let regex = new RegExp(pattern);
      if ($input.name === "age") {
        if (parseInt($input.value) < "18") {
          $submit.setAttribute("disabled", "");
          d.getElementById($input.name).classList.add("is-active");
        } else {
          $submit.removeAttribute("disabled");
          d.getElementById($input.name).classList.remove("is-active");
        }
      }
      if (pattern && $input.value !== "") {
        regex = new RegExp(pattern);
        if (!regex.exec($input.value)) {
          $submit.setAttribute("disabled", "");
          d.getElementById($input.name).classList.add("is-active");
        } else {
          $submit.removeAttribute("disabled");
          d.getElementById($input.name).classList.remove("is-active");
        }
      }
      if (!pattern) {
        regex = new RegExp(pattern);
        if (!regex.exec($input.value)) {
          $submit.setAttribute("disabled", "");
          d.getElementById($input.name).classList.add("is-active");
        } else {
          $submit.removeAttribute("disabled");
          d.getElementById($input.name).classList.remove("is-active");
        }
      }
    }
  });
}
