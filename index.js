let faqElements = document.getElementsByClassName("faq-accordion__element");

for (let i = 0; i < faqElements.length; i++) {
  state = false;
  let answers = document.getElementsByClassName("faq-answer");
  let hideIcon = document.getElementsByClassName("icon-minus");
  let showIcon = document.getElementsByClassName("icon-plus");

  faqElements[i].addEventListener("click", () => {
    state = !state;
    if (state) {
      hideIcon[i].style.display = "block";
      showIcon[i].style.display = "none";
      answers[i].style.display = "block";
    } else if (!state) {
      hideIcon[i].style.display = "none";
      showIcon[i].style.display = "block";
      answers[i].style.display = "none";
    }
  });
}

// let faqElements = document.getElementsByClassName("faq-accordion__element");

// faqElements.forEach(element => {
//   let answer = element.querySelector("faq-answer");
//   let hideIcon = element.querySelector(".icon-minus");
//   let showIcon = element.querySelector(".icon-plus");

//   let isOpen = false; // State for each accordion element

//   element.addEventListener("click", () => {
//     isOpen = !isOpen;

//     answer.style.display = isOpen ? "block" : "none";
//     hideIcon.style.display = isOpen ? "block" : "none";
//     showIcon.style.display = isOpen ? "none" : "block";
//   });
// });

// faqElements.forEach((element) => {
//   element.addEventListener("click", () => {
//     let answers = document.getElementsByClassName("faq-answer");
//     let hideIcon = document.getElementsByClassName("icon-minus");
//     let showIcon = document.getElementsByClassName("icon-plus");

//     state = !state;
//     if (state) {
//       // hideIcon[i].style.display = "block";
//       // showIcon[i].style.display = "none";
//       hideIcon.forEach((element) => {
//         element.style.display = "block";
//       });

//       hideIcon.forEach((element) => {
//         element.style.display = "none";
//       });

//       answers.forEach((element) => {
//         element.style.display = "block";
//       });
//     } else if (!state) {
//       hideIcon[i].style.display = "none";
//       showIcon[i].style.display = "block";
//       answers[i].style.display = "none";
//     }
//   });
// });
