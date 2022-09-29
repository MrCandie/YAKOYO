"use strict";
const navigator = function () {
  const openMenu = document.querySelector(".openMenu");
  const closeMenu = document.querySelector(".closeMenu");
  const nav = document.querySelector(".nav");
  const navText = document.querySelector(".text");
  const navText1 = document.querySelector(".text1");
  const navText2 = document.querySelector(".text2");
  const navText3 = document.querySelector(".text3");
  const navText4 = document.querySelector(".text4");
  const bigLogo = document.querySelector(".big-logo");
  const smallLogo = document.querySelector(".small-logo");
  const navLink = document.querySelectorAll(".nav--link");
  const overlay = document.querySelector(".overlay");
  console.log(overlay);

  // close navBar FUNCTION
  const closeNav = function () {
    nav.style.width = "70px";
    navText.style.opacity = 0;
    navText1.style.opacity = 0;
    navText2.style.opacity = 0;
    navText3.style.opacity = 0;
    navText4.style.opacity = 0;
    openMenu.style.display = "block";
    closeMenu.style.display = "none";
    bigLogo.style.display = "none";
    smallLogo.style.display = "block";
    overlay.classList.add("hidden");
  };
  // closeNav();

  // OPEN NAVBAR
  openMenu.addEventListener("click", function (e) {
    nav.style.width = "500px";
    navText.style.opacity = 1;
    navText1.style.opacity = 1;
    navText2.style.opacity = 1;
    navText3.style.opacity = 1;
    navText4.style.opacity = 1;
    openMenu.style.display = "none";
    closeMenu.style.display = "block";
    bigLogo.style.display = "block";
    smallLogo.style.display = "none";
    overlay.classList.remove("hidden");
  });

  // CLOSE NAVBAR BTN
  closeMenu.addEventListener("click", closeNav);

  // PREVENTING DEFAULT BEHAVIOUR ON NAV LINKS
  navLink.forEach((l, i) =>
    l.addEventListener("click", function (e) {
      e.preventDefault();
      //   console.log(e.target);
      console.log(i);
      document
        .querySelector(`#section-${i}`)
        .scrollIntoView({ behavior: "smooth" });
      closeNav();
    })
  );

  // OVERLAY
  overlay.addEventListener("click", function () {
    closeNav();
  });
};
navigator();

// CODE FOR MENU
const select = document.querySelectorAll(".select");
const select1 = document.querySelector("#select-0");
const select2 = document.querySelector("#select-1");
const select3 = document.querySelector("#select-2");
const select4 = document.querySelector("#select-3");
const select5 = document.querySelector("#select-4");
const btnSubmit = document.querySelector("#btn-submit");
const totalAmount = document.querySelector(".total-amount");
const proceed = document.querySelector(".make-payment-btn");
const pay = document.querySelector(".make-payment");
const placeHolder = document.querySelector(".place-order");
console.log(placeHolder);

btnSubmit.addEventListener("click", function (e) {
  // e.preventDefault();
});
proceed.addEventListener("click", function (e) {
  e.preventDefault();
  let total1, total2, total3, total4, total5;
  if (select1.selectedIndex > 0) {
    //SELECT BOX 1
    const index1 = select1.selectedIndex;
    const selectedOption1 = select1.options[`${select1.selectedIndex}`];
    total1 = Number(selectedOption1.value);
    console.log(total1);
  } else {
    total1 = 0;
  }

  if (select2.selectedIndex > 0) {
    //SELECT BOX 2
    const selectedOption2 = select2.options[`${select2.selectedIndex}`];
    total2 = Number(selectedOption2.value);
    console.log(total2);
  } else {
    total2 = 0;
  }
  if (select3.selectedIndex > 0) {
    //SELECT BOX 3
    const selectedOption3 = select3.options[`${select3.selectedIndex}`];
    total3 = Number(selectedOption3.value);
    console.log(total3);
  } else {
    total3 = 0;
  }
  if (select4.selectedIndex > 0) {
    //SELECT BOX 4
    const selectedOption4 = select4.options[`${select4.selectedIndex}`];
    total4 = Number(selectedOption4.value);
    console.log(total4);
  } else {
    total4 = 0;
  }
  //SELECT BOX 5
  if (select5.selectedIndex > 0) {
    const selectedOption5 = select5.options[`${select5.selectedIndex}`];
    total5 = Number(selectedOption5.value);
    console.log(total5);
  } else {
    total5 = 0;
  }
  console.log(typeof total5);
  const total = total1 + total2 + total3 + total4 + total5;
  totalAmount.value = total;
  pay.classList.toggle("pay");
  placeHolder.classList.toggle("height");
});
