var navbar_href = document.querySelectorAll(".website__links");
var navbar_field = document.getElementById("navi-toggle");

document.getElementById("copyright-year").innerHTML = new Date().getFullYear();

navbar_href.forEach((item) => {
  item.addEventListener("click", function () {
    navbar_field.checked = false;
  });
});
