document.addEventListener("DOMContentLoaded", function () {
  let link1 = document.getElementById("mnyvrsnclk");
  let dropdown1 = document.querySelector(".dropdownlistTwo");
  let link2 = document.getElementById("wrkflows");
  let dropdown2 = document.querySelector(".dropdownlistOne");

  link1.addEventListener("click", function (event) {
    event.preventDefault();

    if (dropdown1.style.display === "none") {
      dropdown1.style.display = "flex";
    } else {
      dropdown1.style.display = "none";
    }
  });

  link2.addEventListener("click", function (event) {
    event.preventDefault();

    if (dropdown2.style.display === "none") {
      dropdown2.style.display = "flex";
    } else {
      dropdown2.style.display = "none";
    }
  });

  document.addEventListener("click", function (event) {
    if (
      event.target !== link1 &&
      event.target.closest(".dropdownlistTwo") !== dropdown1 &&
      event.target !== link2 &&
      event.target.closest(".dropdownlistOne") !== dropdown2
    ) {
      dropdown1.style.display = "none";
      dropdown2.style.display = "none";
    }
  });
});
document.getElementById("headerbutton").addEventListener("click", function () {
  let scrollPosition = window.innerHeight * 0.8;

  window.scrollTo({
    top: scrollPosition,
    behavior: "smooth",
  });
});
