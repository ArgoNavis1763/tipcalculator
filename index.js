let billInput;
let tipValue;
let totalPeople = 1;
let tipPP;
let billPP;
const displayTip = document.getElementById("tip-pp");
const displayBill = document.getElementById("total-pp");



const checkInputs = (billInput, tipValue, totalPeople) => {
 return (
typeof billInput !== "undefined" && 
typeof tipValue !== "undefined" &&
typeof totalPeople !== "undefined");}; 



const billAmount = document.getElementById("bill-amount");
billAmount.addEventListener("input", (event) => {
  billInput = event.target.value;
  if (checkInputs(totalPeople, billInput, tipValue) === true) {
tipPP = tipCalculation(billInput, tipValue, totalPeople);
billPP = billCalculation(billInput, tipValue, totalPeople);
displayTip.innerText = `$${tipPP.toFixed(2)}`;
displayBill.innerText = `$${billPP.toFixed(2)}`;
  }
});

const tipButtons = document.querySelectorAll(".tip-button");
tipButtons.forEach((tipbutton) => {
  tipbutton.addEventListener("click", (event) => {
    tipValue = Number(event.target.value);
    if (checkInputs(totalPeople, billInput, tipValue) === true) {
        tipPP = tipCalculation(billInput, tipValue, totalPeople);
        billPP = billCalculation(billInput, tipValue, totalPeople);
        displayTip.innerText = `$${tipPP.toFixed(2)}`;
        displayBill.innerText = `$${billPP.toFixed(2)}`;
  };
});

const numberOfPeople = document.getElementById("number-of-people");
numberOfPeople.addEventListener("change", (event) => {
  totalPeople = Number(event.target.value);
  if (checkInputs(totalPeople, billInput, tipValue) === true) {
    tipPP = tipCalculation(billInput, tipValue, totalPeople);
    billPP = billCalculation(billInput, tipValue, totalPeople);
    displayTip.innerText = `$${tipPP.toFixed(2)}`;
    displayBill.innerText = `$${billPP.toFixed(2)}`;
};

const tipCalculation = (bill, tip, people) => {
  return (bill * tip) / people;
};

const billCalculation = (bill, tip, people) => {
    return (bill + bill * tip) / people;
};



const resetButton = document.getElementById("reset-button");
resetButton.addEventListener("click", function handleClick(event) {
    const inputs = document.querySelector("#bill-amount, #tip-percentage, #number-of-people")
    inputs.forEach(input) => 
        input.value= "");
        
    }
);