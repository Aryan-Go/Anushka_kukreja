// alert("Hey");
let one = document.getElementById("one");
one.addEventListener("mousemove", function (e) {
  const cursorText = document.getElementById("cursor-text");
  cursorText.innerText = "Amar Ujala";
  // cursorText.style.visibility = "visible";
  const slabRect = one.getBoundingClientRect();
  if (e.clientX <= slabRect.right && e.clientX >= slabRect.left && e.clientY >= slabRect.top && e.clientY <= slabRect.bottom) {
    cursorText.style.visibility = "visible";
  }
  else {
    cursorText.style.visibility = "hidden";
  }
  cursorText.style.left = e.clientX + "px";
  cursorText.style.top = e.clientY + "px";
});

one.addEventListener("mouseleave", () => {
  const cursorText = document.getElementById("cursor-text");
  cursorText.style.visibility = "hidden";
});



let two = document.getElementById("two");
two.addEventListener("mousemove", function (e) {
  const cursorText = document.getElementById("cursor-text");
  cursorText.innerText = "Pinkvilla";
  // cursorText.style.visibility = "visible";
  const slabRect = two.getBoundingClientRect();
  if (
    e.clientX <= slabRect.right &&
    e.clientX >= slabRect.left &&
    e.clientY >= slabRect.top &&
    e.clientY <= slabRect.bottom
  ) {
    cursorText.style.visibility = "visible";
  } else {
    cursorText.style.visibility = "hidden";
  }
  cursorText.style.left = e.clientX + "px";
  cursorText.style.top = e.clientY + "px";
});

two.addEventListener("mouseleave", () => {
  const cursorText = document.getElementById("cursor-text");
  cursorText.style.visibility = "hidden";
});



let three = document.getElementById("three");
three.addEventListener("mousemove", function (e) {
  const cursorText = document.getElementById("cursor-text");
  cursorText.innerText = "Mirchi";
  // cursorText.style.visibility = "visible";
  const slabRect = three.getBoundingClientRect();
  if (
    e.clientX <= slabRect.right &&
    e.clientX >= slabRect.left &&
    e.clientY >= slabRect.top &&
    e.clientY <= slabRect.bottom
  ) {
    cursorText.style.visibility = "visible";
  } else {
    cursorText.style.visibility = "hidden";
  }
  cursorText.style.left = e.clientX + "px";
  cursorText.style.top = e.clientY + "px";
});

three.addEventListener("mouseleave", () => {
  const cursorText = document.getElementById("cursor-text");
  cursorText.style.visibility = "hidden";
});



let four = document.getElementById("four");
four.addEventListener("mousemove", function (e) {
  const cursorText = document.getElementById("cursor-text");
  cursorText.innerText = "NDTV GoodTimes";
  // cursorText.style.visibility = "visible";
  const slabRect = four.getBoundingClientRect();
  if (
    e.clientX <= slabRect.right &&
    e.clientX >= slabRect.left &&
    e.clientY >= slabRect.top &&
    e.clientY <= slabRect.bottom
  ) {
    cursorText.style.visibility = "visible";
  } else {
    cursorText.style.visibility = "hidden";
  }
  cursorText.style.left = e.clientX + "px";
  cursorText.style.top = e.clientY + "px";
});

four.addEventListener("mouseleave", () => {
  const cursorText = document.getElementById("cursor-text");
  cursorText.style.visibility = "hidden";
});