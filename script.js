const preBtn = document.querySelector("#pre");
const nextBtn = document.querySelector("#next");
const progress = document.getElementById("progress");
const circles = document.querySelectorAll(".circles");

// turns nodelist of circles into an array object
const circlesArr = Array.from(circles);

// loop through array of circle objects and returns the first object without active class
const findNextCircle = () => {
  const nextCircle = circlesArr.find(
    (circle) => !circle.classList.contains("active")
  );
  return nextCircle;
};

// if findNextCircle returns an object without the active class
// add active class to object class list and increase progress bar width
const nextProgress = () => {
  const nextCircle = findNextCircle();
  if (nextCircle) {
    const pos = circlesArr.indexOf(nextCircle);
    nextCircle.classList.add("active");
    progress.style.width = `${pos * 30}%`;
  }
};

nextBtn.addEventListener("click", nextProgress);
