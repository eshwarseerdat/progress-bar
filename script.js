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
  if (circlesArr.indexOf(nextCircle) > 0) {
    const pos = circlesArr.indexOf(nextCircle);
    nextCircle.classList.add("active");
    progress.style.width = `${pos * 30}%`;
    if (pos === circlesArr.length - 1) {
      nextBtn.toggleAttribute("disabled");
    }
  }
  if (preBtn.hasAttribute("disabled")) {
    preBtn.toggleAttribute("disabled");
  }
};

// search for last element with active class
// if index of last element greater than 0 remove active class and reduce width of progress bar
const preProgress = () => {
  const lastActive = circlesArr.findLast((circle) =>
    circle.classList.contains("active")
  );
  if (circlesArr.indexOf(lastActive) > 0) {
    const pos = circlesArr.indexOf(lastActive);
    lastActive.classList.remove("active");
    progress.style.width = `${pos * 30 - 30}%`;
    if (pos === 1) {
      preBtn.toggleAttribute("disabled");
    }
  }
  if (nextBtn.hasAttribute("disabled")) {
    nextBtn.toggleAttribute("disabled");
  }
};

nextBtn.addEventListener("click", nextProgress);
preBtn.addEventListener("click", preProgress);
