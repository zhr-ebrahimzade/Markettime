window.onload = function () {
  const toggleButton = document.getElementsByClassName("toggle-button")[0];
  /*   const navbarLinks = ; */
  toggleButton.addEventListener("click", () => {
    console.log("Hello");
    document.getElementsByClassName("nav")[0].classList.toggle("active");
    console.log("Hello");
  });
};
