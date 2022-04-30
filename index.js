console.log("it works!");

let form = document.getElementById("form");

function calculateInterest(money, interest, time) {
  for (x = 0; x < time; x++) {
    console.log(x, money, interest, time);
    money += money * interest;
  }
  return money;
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(e.target).entries());
  let money = Number(data.dollarAmount);
  let interest = Number(data.interestRate);
  let years = Number(data.time);
  let result = calculateInterest(money, interest, years);
  output.innerHTML = result;
});
