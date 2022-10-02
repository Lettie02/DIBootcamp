// function helloWorld() {
//   alert("Hello World");
// }
// setTimeout(helloWorld, 2000);
let i = 0;
function newParagraph() {
  const newP = document.createElement("p");
  const node = document.createTextNode("hello world");
  newP.appendChild(node);
  let element = document.getElementById("container");
  element.appendChild(newP);
  i++;
  if (i > 5) {
    clearInterval(myInterval);
  }
}
// setTimeout(newParagraph, 2000);

let myInterval = setInterval(() => {
  newParagraph();
}, 2000);
