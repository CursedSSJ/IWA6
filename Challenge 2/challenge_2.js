const rent = 400;
const tax = "8%";
const food = 51.7501;
const salary = 800;
const transport = 10.2;
const hourOfDay = 00;
const minuteOfDay = 00;

// Only change below this line
function calculateBalance() {
  if (hourOfDay === 0 && minuteOfDay === 0) {
    const taxAsDecimal = parseFloat(tax) / "100";
    const startingAfterTax = salary * (1 - taxAsDecimal);
    let balance = startingAfterTax - food - transport - rent;

    console.log("R", balance.toFixed(2));
  }

  if (hourOfDay === undefined || minuteOfDay === undefined) {
    return;
  }
}

calculateBalance();
