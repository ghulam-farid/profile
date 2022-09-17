window.onscroll = (ev) => {
  document.getElementsByClassName(
    "welcome-section__content"
  )[0].style.opacity = 1 - window.scrollY / 300;
  document.getElementsByClassName(
    "welcome-section__content"
  )[0].style.transform = "translateY(" + window.scrollY / 4 + "px)";

  let welcomeSecStyle =
    document.getElementsByClassName("welcome-section")[0];
  let contactSecStyle =
    document.getElementsByClassName("contact-section")[0];
  let contactSecContentStyle = document.getElementsByClassName(
    "contact-section__content"
  )[0];
  if (
    window.innerHeight + window.scrollY >=
    document.body.offsetHeight / 1.5
  ) {
    welcomeSecStyle.style.zIndex = 2;
    contactSecStyle.style.zIndex = 3;

    contactSecContentStyle.style.opacity = 0 + window.scrollY / 1845;
    contactSecContentStyle.style.transform =
      "translateY(-" + window.scrollY / 8 + "px)";
    contactSecContentStyle.style.transition = "all 0.2s linear";
  } else {
    welcomeSecStyle.style.zIndex = 3;
    contactSecStyle.style.zIndex = 2;
    contactSecContentStyle.style.opacity = 1;
  }
};
window.onload = (ev) => {
  let welcomeSecContentStyle = document.getElementsByClassName(
    "welcome-section__content"
  )[0];
  welcomeSecContentStyle.firstElementChild.style.transform = "translateX(0%)";
  welcomeSecContentStyle.firstElementChild.style.transition = "transform 0.8s ease-in-out";
  welcomeSecContentStyle.children[1].style.transform = "translateX(0%)";
  welcomeSecContentStyle.children[1].style.transition =
    "transform 0.8s ease-in-out";
};