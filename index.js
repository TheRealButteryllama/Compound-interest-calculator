console.log("it works!");

let dollarAmount = document.getElementById("dollarAmount");
let interestRate = document.getElementById("interestRate");
let calculate = document.getElementById("calculate");
let output = document.getElementById("output");
let time = document.getElementById("time");

function calculateInterest(money, interest, time) {
  for (x = 0; x < time; x++) {
    console.log(x, money, interest, time);
    money += money * interest;
  }
  return money;
}

// calculate.addEventListener("click", calculateInterest)

calculate.addEventListener("click", function (e) {
  console.log(dollarAmount.value);
  console.log(interestRate.value);
  let money = Number(dollarAmount.value);
  let interest = Number(interestRate.value);
  let years = Number(time.value);
  let result = calculateInterest(money, interest, years);
  output.innerHTML = result;
});
