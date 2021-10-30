(function () {
  const $buttons = document.querySelectorAll("button");
  $buttons.forEach((button) => {
    button.addEventListener("click", function (e) {
      const value = e.target.getAttribute("data-value");
      if (value === "C") {
        clearDisplay();
        return;
      }
      if (value === "D") {
        deleteLastCharacter();
        return;
      }
      if (value === "=") {
        calculate();
        return;
      }
      putContentInDisplay(value);
    });
  });

  function clearDisplay() {
    document.querySelector(".current").innerHTML = "";
    const $exp = document.querySelector(".exp");
    $exp.innerHTML = "";
    $exp.classList.remove("expAfter");
  }

  function calculate() {
    const $current = document.querySelector(".current");
    const expression = $current.innerHTML;
    const result = eval(expression);
    $current.innerHTML = result;

    const $exp = document.querySelector(".exp");
    $exp.classList.add("expAfter");

    $exp.innerHTML = expression;
  }

  function deleteLastCharacter() {
    const $current = document.querySelector(".current");
    $current.innerHTML = $current.innerHTML.slice(0, -1);
  }

  function putContentInDisplay(value) {
    const $current = document.querySelector(".current");
    $current.innerHTML += value;
  }
})();
