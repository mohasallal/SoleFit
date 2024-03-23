document.addEventListener("DOMContentLoaded", function () {
  var link = document.getElementById("mnyvrsnclk");
  var dropdown = document.querySelector(".dropdownlistTwo");

  link.addEventListener("click", function (event) {
    event.preventDefault();

    if (dropdown.style.display === "none") {
      dropdown.style.display = "flex";
    } else {
      dropdown.style.display = "none";
    }
  });

  document.addEventListener("click", function (event) {
    if (
      event.target !== link &&
      event.target.closest(".dropdownlistTwo") !== dropdown
    ) {
      dropdown.style.display = "none";
    }
  });
});
document.addEventListener("DOMContentLoaded", function () {
  var link = document.getElementById("wrkflows");
  var dropdown = document.querySelector(".dropdownlistOne");

  link.addEventListener("click", function (event) {
    event.preventDefault();

    if (dropdown.style.display === "none") {
      dropdown.style.display = "flex";
    } else {
      dropdown.style.display = "none";
    }
  });
  document.addEventListener("click", function (event) {
    if (
      event.target !== link &&
      event.target.closest(".dropdownlistOne") !== dropdown
    ) {
      dropdown.style.display = "none";
    }
  });
});
document.getElementById("headerbutton").addEventListener("click", function () {
  var scrollPosition = window.innerHeight * 0.8;

  window.scrollTo({
    top: scrollPosition,
    behavior: "smooth",
  });
});
