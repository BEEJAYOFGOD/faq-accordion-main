// faqElements = document.getElementsByClassName("faq-accordion__element");

// faqElements[0].addEventListener("click", console.log("dapo"));
// ide = document.getElementById("adebola");
// ide.addEventListener("click", alert("bola"));

function myFunction() {
  let age = document.getElementById("age").value;
  let condition = age <= 18 ? "can't vote " : "Can Vote";
  document.getElementById("demo").innerHTML = "The person " + condition;
}
btn = document.getElementById("btn");
btn.addEventListener("click", myFunction);

// let faqElements = document.getElementsByClassName("faq-accordion__element");
// let faqQues = document.getElementsByClassName("faq-question");
// let faqanswer = document.getElementsByClassName("faq-answer");
// let viewanswer = document.getElementsByClassName("icon-plus");
// let closeans = document.getElementsByClassName("icon-minus");
// let faqElements = document.querySelectorAll("faq-accordion__element");
// faqElements[0].addEventListener("click", alert("ade"));

// faqElements.forEach((element) => {
//   // let isOpen = false;
//   faqElements[0].addEventListener("click",
//     alert("ade"));
// isOpen = !isOpen;
// const answer = element.querySelector(".faq-answer");
// const viewAnswerIcon = element.querySelector(".icon-plus");
// const closeAnswerIcon = element.querySelector(".icon-minus");

// answer.style.display = isOpen ? "block" : "none";
// viewAnswerIcon.style.display = isOpen ? "none" : "block";
// closeAnswerIcon.style.display = isOpen ? "block" : "none";
// isOpen = !isOpen;

// function myFunc() {
//   faqanswer[0].style.display = "block";
//   viewanswer[0].style.display = "none";
//   closeans[0].style.display = "block";
// }

// function myFunc2() {
//   faqanswer[0].style.display = "none";
//   viewanswer[0].style.display = "block";
//   closeans[0].style.display = "none";
// }

// if (isOpen === false) {
//   faqElements[0].addEventListener("click", myFunc);
// }

// isOpen = true;
// if (isOpen === true) {
//   faqElements[0].addEventListener("click", myFunc2);
// }

// faqQues.forEach((element) => {
//   let isOpen = false; // Tracks the open/closed state of each element

//   element.addEventListener("click", () => {
//     // Toggle the open/closed state
//     isOpen = !isOpen;

//     // Update element styles based on the state
//     faqanswer[0].style.display = isOpen ? "block" : "none";
//     viewanswer[0].style.display.style.display = isOpen ? "none" : "block";
//     closeans[0].style.display = isOpen ? "block" : "none";
//   });
// });

// function myFunction() {
//   for (i = 0; i < faqElements.length; i++) {
//     if (!mode) {
//       faqElements[0].style.display = "block";
//     }
//   }
// }
// for (i = 0; i < faqElements.length; i++) {
//   faqElements[0].addEventListener("click", myFunction);
// }
