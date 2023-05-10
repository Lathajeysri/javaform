// console.log(document);

// const bodyEl = document.getElementById("where");
// bodyEl.onclick=function(){
//     alert("document body is clicked");
// }
const creditBtnEl = document.getElementById("creditBtn");
// console.log(creditBtnEl);
// // (X) using HTML Attribute
// // creditBtnEl.setAttribute(
// //   "onclick",
// //   'alert("Authored by Anbuselvan - setAttribute")'
// // );

// // (X) Drawbacks - Can't accept multiple actions
// creditBtnEl.onclick = function () {
//   alert("Authored by Anbuselvan");
// };
// creditBtnEl.onclick = function () {
//     alert("Authored by Trisha");
//   };
// function handleAuthorInfo() {
//   alert("Authored by Trisha");
// }

// creditBtnEl.onclick = handleAuthorInfo();

// Listen for Events using `AddEventListeners`
// window.addEventListener()
// document.addEventListener()
// element.addEventListeners()

creditBtnEl.addEventListener("click",function() {  //"dblclick"
    alert("Authorized by Latha");
    console.log("I have been clicked");

});
creditBtnEl.addEventListener("click",function() {  //"dblclick"
    alert("Authorized by Mugesh");
    console.log("I have been clicked");

});

// const handleCreditMsg = (event) => {
//   alert("Javascript DOM - Anbuselvan");
//   console.log(event.target);
//   alert(event.type + " at " + event.currentTarget.innerHTML);
//   alert("Coordinates: " + event.clientX + ":" + event.clientY);
// };

// // bodyEl.addEventListener("click", handleCreditMsg);

// document.addEventListener("contextmenu", handleCreditMsg);