let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let startBtn = document.querySelector("#start");
let display = document.querySelector(".hide");
let winMsg = document.querySelector("#winMsg");

let turnO = true;
let count = 0;
console.log(count);
const winPattern = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO) {
      box.innerText = "O";
      turnO = false;
    } else {
      box.innerText = "X";
      turnO = true;
    }
    box.disabled = true;
    checkWinner();
    checkDraw();
    count++;
  });
});
let checkDraw = () => {
  if (count === 8 && !checkWinner()) {
    winMsg.innerText = `It's a Draw!!!`;
  
    display.classList.remove("hide");
    
  }
};
let checkWinner = () => {
  for (pattern of winPattern) {
    let pos0 = boxes[pattern[0]].innerText;
    let pos1 = boxes[pattern[1]].innerText;
    let pos2 = boxes[pattern[2]].innerText;
    if (pos0 != "" && pos1 != "" && pos2 != "") {
      if (pos0 === pos1 && pos1 === pos2 && pos0 === pos2) {
        boxes.forEach((box) => {
          winMsg.innerText = `The Winner is ${pos0}🏆`;
          box.disabled = true;
          display.classList.remove("hide");
        });

        return true
      }
    }
  }
  return false;
};

start = () => {
  boxes.forEach((box) => {
    box.innerText = "";
    display.classList.add("hide");
    box.disabled = false;
    turnO = true;
    count = 0;
  });
};
reset = () => {
  boxes.forEach((box) => {
    box.innerText = "";
    display.classList.add("hide");
    box.disabled = false;
    turnO = true;
      count = 0;
  });
};
startBtn.addEventListener("click", start);
resetBtn.addEventListener("click", reset);
// let checkWinner = () => {
//   for (pattern of winPattern) {
//     let pos1 = boxes[pattern[0]].innerText;
//     let pos2 = boxes[pattern[1]].innerText;
//     let pos3 = boxes[pattern[2]].innerText;
//     if (pos1 != "" && pos2 != "" && pos3 != "") {
//       if (pos1 == pos2 && pos2 == pos3) {
//         boxes.forEach((box) => {
//           winMsg.innerText = `The Winner is ${pos1}🏆`;
//           box.disabled = true;
//           display.classList.remove("hide");
//         });
//         return true;
//       }
//     }
//   }
//   return false;
// };

// let turnO = true;
// let count = 0;

// let reset = () => {
//   boxes.forEach((box) => {
//     box.disabled = false;
//     box.innerText = "";
//     display.classList.add("hide");
//   });
//   count = 0;
// };
// let start = () => {
//   boxes.forEach((box) => {
//     box.disabled = false;
//     box.innerText = "";
//     display.classList.add("hide");
//     turnO = true;
//   });
//   count = 0;
// };
// resetBtn.addEventListener("click", reset);
// startBtn.addEventListener("click", start);

// const winPattern = [
//   [0, 1, 2],
//   [3, 4, 5],
//   [6, 7, 8],
//   [0, 3, 6],
//   [1, 4, 7],
//   [2, 5, 8],
//   [0, 4, 8],
//   [2, 4, 6],
// ];

// boxes.forEach((box) => {
//   box.addEventListener("click", () => {
//     if (turnO) {
//       box.innerText = "O";
//       turnO = false;
//     } else {
//       box.innerText = "X";
//       turnO = true;
//       box.style.color = "#ebc669d0";
//     }
//     box.disabled = true;
//     checkWinner();
//     checkDraw();
//     count++;

//   });
// });

// let checkDraw = () => {
//   if (count === 8 && !checkWinner()) {
//     display.classList.remove("hide");
//     winMsg.innerText = `It's a Draw!!!`;
//   }
// };

// let checkWinner = () => {
//   for (pattern of winPattern) {
//     let pos1 = boxes[pattern[0]].innerText;
//     let pos2 = boxes[pattern[1]].innerText;
//     let pos3 = boxes[pattern[2]].innerText;
//     if (pos1 != "" && pos2 != "" && pos3 != "") {
//       if (pos1 == pos2 && pos2 == pos3) {
//         boxes.forEach((box) => {
//           winMsg.innerText = `The Winner is ${pos1}🏆`;
//           box.disabled = true;
//           display.classList.remove("hide");
//         });
//         return true;
//       }
//     }
//   }
//   return false;
// };
 