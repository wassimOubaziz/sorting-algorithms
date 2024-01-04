const bubble = document.querySelector(".bubble");
const insertion = document.querySelector(".insertion");
const selection = document.querySelector(".selection");
let sort = ``;
const button1 = document.querySelector(".button.el1");
const button2 = document.querySelector(".button.el2");
const button3 = document.querySelector(".button.el3");

let arr = [5, 2, 3, 10, 6, 8, 4, 1];
for (let i = 0; i < 50; i++) {
  arr.push(Math.floor(Math.random() * 13 + 1));
}

for (let i = 0; i < arr.length; i++) {
  sort =
    sort +
    `<div class="sort"></div>
  `;
}
// add to bubble sort the sort element
bubble.insertAdjacentHTML("afterbegin", sort);

// add to insertion sort the sort element
insertion.insertAdjacentHTML("afterbegin", sort);

// add to selection sort the sort element
selection.insertAdjacentHTML("afterbegin", sort);

const sortsBubble = document.querySelectorAll(".bubble .sort");
bubble.style.gridTemplateColumns = `repeat(${arr.length}, 1fr)`;

for (const [index, key] of sortsBubble.entries()) {
  key.style.gridRow = `15/${15 - arr[index]}`;
}

const sortsInsertion = document.querySelectorAll(".insertion .sort");
for (const [index, key] of sortsInsertion.entries()) {
  key.style.gridRow = `15/${15 - arr[index]}`;
}

const sortsSelection = document.querySelectorAll(".selection .sort");
for (const [index, key] of sortsSelection.entries()) {
  key.style.gridRow = `15/${15 - arr[index]}`;
}

function swap(arr, m, n) {
  const k = arr[m];
  arr[m] = arr[n];
  arr[n] = k;
}

let i = 0, j = 5;

function animateBubble() {
  let anim = requestAnimationFrame(animateBubble);
  if (arr[j] > arr[j + 1]) {
    swap(arr, j, j + 1);
  }
  if (i < arr.length) {
    j = j + 1;
    for (const [index, key] of sortsBubble.entries()) {
      key.style.gridRow = `15/${15 - arr[index]}`;
    }
    if (j >= arr.length - i - 1) {
      j = 0;
      i = i + 1;
    }
  } else {
    i = 0;
    j = 0;
    cancelAnimationFrame(anim);
    setTimeout(function () {
      location.reload();
    }, 5000);
  }
}

button1.addEventListener("click", function () {
  animateBubble();
});

let second = 100;

function animateInsertion() {
  setTimeout(function () {
    const anim = requestAnimationFrame(animateInsertion);

    if (arr[j] > second && j >= 0) {
      arr[j + 1] = arr[j];
      arr[j] = second;
      j--;
    } else {
      if (i < arr.length) {
        i++;
        j = i - 1;
        second = arr[i];
      } else {
        i = 0;
        j = 0;
        cancelAnimationFrame(anim);
        setTimeout(function () {
          location.reload();
        }, 5000);
      }
    }
  }, 10);

  for (const [index, key] of sortsInsertion.entries()) {
    key.style.gridRow = `15/${15 - arr[index]}`;
  }
}

button2.addEventListener("click", function () {
  animateInsertion();
});


let small = 0;
let temp = arr[0];

function animateSection() {
  const anim = requestAnimationFrame(animateSection);

  if (arr[j + 1] < arr[small]) {
    small = j + 1;
  }

  if (i < arr.length) {
    if (j < i) {
      j = i;
      small = i;
      temp = arr[i];
    }

    if (j < arr.length - 1) {
      j++;
    } else {
      arr[i] = arr[small];
      arr[small] = temp;
      i++;
      temp = arr[i];
      j = i + 1;
      small = i;
    }
  } else {
    i = 0;
    j = 0;
    cancelAnimationFrame(anim);
  }

  for (const [index, key] of sortsSelection.entries()) {
    key.style.gridRow = `15/${15 - arr[index]}`;
  }
}

button3.addEventListener("click", function () {
  animateSection();
});

