// first page

let totalPrice = [];
let results = 0;
let addsValue = [];
let counter = 1;
let choice = "Arcade";
let planBrice;

const sidebar = document.querySelector(".sidebar");
const stepNum = document.querySelectorAll(".sidebar .step-n");
const btn = document.querySelector(".main-1 button");
const overFlow = document.querySelector(".main-card .form .overflow");
const nameInput = document.getElementById("name");
const mailInput = document.getElementById("mail");
const numInput = document.getElementById("num");
const msg1 = document.querySelector(".wrong-msg .msg-1");
const msg2 = document.querySelector(".wrong-msg .msg-2");
const msg3 = document.querySelector(".wrong-msg .msg-3");
// second page
const backBtnP2 = document.querySelector(".main-2 .back");
const nextBtnP2 = document.querySelector(".main-2 .next");
const boxesContainer = document.querySelector(".main-2 .boxes");
const boxes = document.querySelectorAll(".main-2 .box");
const sub = document.querySelector(".main-2 .sub");
const subH = document.querySelector(".main-2 .sub div");
const arcadep = document.querySelector(".main-2 .arcade p");
const advancedp = document.querySelector(".main-2 .advanced p");
const prop = document.querySelector(".main-2 .pro p");
const free = document.querySelectorAll(".main-2 .box .free");

// third page
const backBtnP3 = document.querySelector(".main-3 .back");
const nextBtnP3 = document.querySelector(".main-3 .next");
const addsContainer = document.querySelector(".main-3 .data-3");
const adds = document.querySelectorAll(".main-3 .choice");

// fourth page
const backBtnP4 = document.querySelector(".main-4 .back");
const nextBtnP4 = document.querySelector(".main-4 .next");
const planName = document.querySelector(".main-4 .plan");
const choiceAdds = document.querySelector(".adds");
const finalPrice = document.querySelector(".total");
const change = document.querySelector(".change");

// page 1
btn.addEventListener("click", () => {
  msg1.style.opacity = 0;
  msg2.style.opacity = 0;
  msg3.style.opacity = 0;
  if (nameInput.value != "" && mailInput.value != "" && numInput.value != "") {
    overFlow.style = "left: -440px;";
    stepNum.forEach((step) => step.classList.remove("clicked-side"));
    stepNum[1].classList.add("clicked-side");
  } else if (nameInput.value == "") {
    nameInput.focus();
    msg1.style.opacity = 1;
  } else if (mailInput.value == "") {
    msg2.style.opacity = 1;
    mailInput.focus();
  } else {
    msg3.style.opacity = 1;
    numInput.focus();
  }
});

// page 2
backBtnP2.addEventListener("click", () => {
  stepNum.forEach((step) => step.classList.remove("clicked-side"));
  overFlow.style = "left: 0;";
  stepNum[0].classList.add("clicked-side");
});
nextBtnP2.addEventListener("click", () => {
  stepNum.forEach((step) => step.classList.remove("clicked-side"));
  overFlow.style = "left: -880px;";
  stepNum[2].classList.add("clicked-side");
  if (counter % 2 != 0) {
    document.querySelector(".fChoice").textContent = `1$/mo`;
    document.querySelector(".sChoice").textContent = `2$/mo`;
    document.querySelector(".tChoice").textContent = `2$/mo`;
  } else {
    document.querySelector(".fChoice").textContent = `10$/y`;
    document.querySelector(".sChoice").textContent = `20$/y`;
    document.querySelector(".tChoice").textContent = `20$/y`;
  }
});
boxesContainer.addEventListener("click", (e) => {
  if (e.target.closest(".box")) {
    boxes.forEach((box) => box.classList.remove("clicked"));
    e.target.closest(".box").classList.add("clicked");
    choice = e.target.closest(".box").getAttribute("id");
  }
});

// page 3
backBtnP3.addEventListener("click", () => {
  stepNum.forEach((step) => step.classList.remove("clicked-side"));
  overFlow.style = "left: -440px;";
  stepNum[1].classList.add("clicked-side");
});
nextBtnP3.addEventListener("click", () => {
  stepNum.forEach((step) => step.classList.remove("clicked-side"));
  overFlow.style = "left: -1320px;";
  stepNum[3].classList.add("clicked-side");
  planName.textContent = choice;
  document.querySelector(".data-4 .duration").textContent =
    counter % 2 != 0 ? `( per month )` : `( per year )`;
  document.querySelector(".main-4 .final-du").textContent =
    counter % 2 != 0 ? `( per month )` : `( per year )`;
  document.querySelector(".data-4 .pprice").textContent = document
    .getElementById(`${choice}`)
    .querySelector("p").textContent;
  choiceAdds.innerHTML = "";
  addsValue.forEach((add) => {
    planBrice = document.getElementById(`${add}`).querySelector(".choiceP");
    let html = `<div class="text-data">
    <p>${add}</p>
    </div>
    <span>${planBrice.textContent}</span>`;
    choiceAdds.insertAdjacentHTML("afterbegin", html);
  });
  //   to reach price of the chosed plan
  boxes.forEach((box) => {
    if (box.classList.contains("clicked")) {
      totalPrice.push(box.querySelector("p").textContent);
    }
  });
  // to reach total price of adds
  adds.forEach((add) => {
    if (add.classList.contains("clicked")) {
      totalPrice.push(add.querySelector(".choiceP").textContent);
    }
  });
  totalPrice.forEach((price) => {
    results += parseInt(price);
  });
  finalPrice.textContent =
    counter % 2 != 0 ? `${results}$/mo` : `${results}$/yr`;
});

// page three
addsContainer.addEventListener("click", (e) => {
  if (e.target.closest(".choice")) {
    let data = e.target.closest(".choice").getAttribute("id");
    search(data);
    e.target.closest(".choice").classList.toggle("clicked");
    if (e.target.closest(".choice").classList.contains("clicked")) {
      e.target.closest(".choice").querySelector("input").checked = true;
    } else e.target.closest(".choice").querySelector("input").checked = false;
  }
});
// page 4
backBtnP4.addEventListener("click", () => {
  totalPrice.length = 0;
  results = 0;
  console.log(finalPrice.textContent);
  stepNum.forEach((step) => step.classList.remove("clicked-side"));
  overFlow.style = "left: -880px;";
  stepNum[2].classList.add("clicked-side");
});
nextBtnP4.addEventListener("click", () => {
  stepNum.forEach((step) => step.classList.remove("clicked-side"));
  overFlow.style = "left: -1760px;";
});

sub.addEventListener("click", (e) => {
  if (e.target.closest(".cir")) {
    counter++;

    if (counter % 2 != 0) {
      subH.style.left = "6%";
      arcadep.textContent = `9$/Mo`;
      advancedp.textContent = `12$/Mo`;
      prop.textContent = `15$/Mon`;
      free.forEach((free) => (free.textContent = ""));
    } else {
      arcadep.textContent = `90$/yr`;
      advancedp.textContent = `120$/yr`;
      prop.textContent = `150$/yr`;
      subH.style.left = "50%";
      free.forEach((free) => (free.textContent = "2 months free"));
    }
  }
});
change.addEventListener("click", () => {
  overFlow.style = "left: -440px;";
  totalPrice.length = 0;
  results = 0;
});

function search(data) {
  if (addsValue.includes(data)) {
    addsValue.indexOf(data);
    addsValue.splice(addsValue.indexOf(data), 1);
  } else addsValue.push(data);
}
