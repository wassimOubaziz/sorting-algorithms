const bubble = document.querySelector(".bubble");
const insertion = document.querySelector(".insertion");
const selection = document.querySelector(".selection");
let sort = ``;
const button1 = document.querySelector(".button.el1");
const button2 = document.querySelector(".button.el2");
const button3 = document.querySelector(".button.el3");
//////
//////
//////
//////
//////
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
// add style to bubble sort
bubble.style.gridTemplateColumns = `repeat(${arr.length}, 1fr)`;

// add style to insertion sort
/* insertion.style.gridTemplateColumns = `repeat(${arr.length}, 1fr)`; */

// this is a bubble sort random treas
for (const [index, key] of sortsBubble.entries()) {
  key.style.gridRow = `15/${15 - arr[index]}`;
}

// this is a insertion sort treas
const sortsInsertion = document.querySelectorAll(".insertion .sort");
for (const [index, key] of sortsInsertion.entries()) {
  key.style.gridRow = `15/${15 - arr[index]}`;
}

// this is a insertion sort treas
const sortsSelection = document.querySelectorAll(".selection .sort");
for (const [index, key] of sortsSelection.entries()) {
  key.style.gridRow = `15/${15 - arr[index]}`;
}

// bubble algorithms

//bubbleSort(arr);
/* function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }
} */
function swap(arr, m, n) {
  const k = arr[m];
  arr[m] = arr[n];
  arr[n] = k;
}

let i = 0,
  j = 5;

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

//insertionSorting(arr);
/* const insertionSorting = function (arr) {
  for (let i = 1; i < arr.length; i++) {
    const second = arr[i];
    let j = i - 1;

    while (arr[j] > second && j >= 0) {
      arr[j + 1] = arr[j];
      arr[j] = second;
      j--;
    }
  }
}; */
//insertionSorting(arr);
//console.log(arr);
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

// selection sort

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let small = i;
    const temp = arr[i];
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[small]) {
        small = j;
      }
    }
    arr[i] = arr[small];
    arr[small] = temp;
  }
}
//selectionSort(arr);
console.log(arr);
let small = 0;
let temp = arr[0];
function animateSection() {
  const anim = requestAnimationFrame(animateSection);
  if (arr[j + 1] < arr[small]) {
    small = j + 1;
  }

  if (i < arr.length) {
    if (j < i + 1) {
      j = 1 + i;
    } else {
      j++;
    }
    if (j >= arr.length) {
      j = 0;
      arr[i] = arr[small];
      arr[small] = temp;
      i++;
      temp = arr[i];
    }
  } else {
    
    i = 0;
    j = 0;
    cancelAnimationFrame(anim);
  }
  for (const [index, key] of sortsSelection.entries()) {
    key.style.gridRow = `15/${15 - arr[index]}`;
  }
  //console.log(i, j);
}

button3.addEventListener("click", function () {
  animateSection();
});
