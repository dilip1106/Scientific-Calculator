let backbtn = document.querySelector(".container .sci-btns .back-btn");
let scibtn = document.querySelector(".container .sci-btns");
let lightmodebtn = document.querySelector(
  ".container .input-box .toggle-btn #light-m-btn"
);
let darkmodebtn = document.querySelector(
  ".container .input-box .toggle-btn #dark-m-btn"
);
let container = document.querySelector(".container");
let input = document.querySelector(".container .input-box input");
let result = document.querySelector(".container .input-box .result");
let allbtn = document.querySelectorAll(".container .btn");

for (let item of allbtn) {
  item.addEventListener("click", (e) => {
    let btnText = e.target.innerHTML;
    if (btnText == "x") {
      btnText = "*";
    }
    input.value += btnText;
  });
}

let calculate = () => {
  result.innerHTML = eval(input.value);
};

let backspace = () => {
  input.value = input.value.substr(0, input.value.length - 1);
  if (input.value == 0) {
    result.innerHTML = "0";
  }
};

let sin = () => {
  result.innerHTML = Math.sin(result.innerHTML);
};

let cos = () => {
  result.innerHTML = Math.cos(result.innerHTML);
};

let tan = () => {
  result.innerHTML = Math.tan(result.innerHTML);
};

let fact = () => {
  var i, num, x;
  x = 1;
  num = result.innerHTML;
  for (i = 1; i <= num; i++) {
    x = x * i;
  }
  i = i - 1;
  result.innerHTML = x;
};

let pi = () => {
  input.value = 3.14;
};

let log = () => {
  result.innerHTML = Math.log(result.innerHTML);
};

let root = () => {
  result.innerHTML = Math.sqrt(result.innerHTML);
};

let e = () => {
  input.value = "2.71828";
};

let pow = () => {
  result.innerHTML = Math.pow(result.innerHTML, 2);
};

backbtn.addEventListener("click", () => {
  scibtn.classList.toggle("active");
  console.log("Hello");
});

lightmodebtn.addEventListener("click", () => {
  container.classList.add("light");
  lightmodebtn.style.display = "none";
  darkmodebtn.style.display = "block";
  console.log("Hello");
});

darkmodebtn.addEventListener("click", () => {
  container.classList.remove("light");
  lightmodebtn.style.display = "block";
  darkmodebtn.style.display = "none";
  console.log("Hello");
});

let clearinput = () => {
  input.value = "";
  result.innerHTML = 0;
};
