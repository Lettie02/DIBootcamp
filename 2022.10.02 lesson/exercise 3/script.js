let element = document.getElementById("box");
element.setAttribute("draggable", "true");

element.addEventListener("dragstart", function (event) {
  event.target.style.backgroundColor = "blue";
  console.log("drag " + "X: " + event.clientX + " Y: " + event.clientY);
});

element.addEventListener("dragEnd", function (event) {
  event.target.style.backgroundColor = "purple";
  let a = event.clientX;
  let b = event.clientY;
  console.log(event);
  event.target.style.left = a + "px";
  event.target.style.top = b + "px";
  event.target.style.position = "absolute";
  console.log("dragEnd" + "X: " + event.clientX + " Y: " + event.clientY);
});
