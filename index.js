console.log("it works!");

let dollarAmount = document.getElementById("dollarAmount");
let interestRate = document.getElementById("interestRate");
let calculate = document.getElementById("calculate");
let output = document.getElementById("output");

function calculateInterest(money, interest) {
  let result = money * interest + money;
  return result;
}

// calculate.addEventListener("click", calculateInterest)

calculate.addEventListener("click", function (e) {
  console.log(dollarAmount.value);
  console.log(interestRate.value);
  let money = Number(dollarAmount.value);
  let interest = Number(interestRate.value);
  let result = calculateInterest(money, interest);
  output.innerHTML = result;
});
