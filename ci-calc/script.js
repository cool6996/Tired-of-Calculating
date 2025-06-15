function calculateCI() {
  const principal = parseFloat(document.getElementById("principal").value);
  const rate = parseFloat(document.getElementById("rate").value);
  const time = parseFloat(document.getElementById("time").value);
  const frequency = parseInt(document.getElementById("frequency").value);

  if (isNaN(principal) || isNaN(rate) || isNaN(time) || isNaN(frequency)) {
    document.getElementById("result").textContent = "Please fill all fields correctly.";
    return;
  }

  const amount = principal * Math.pow((1 + rate / (100 * frequency)), frequency * time);
  const interest = amount - principal;

  document.getElementById("result").innerHTML = `
    Total Amount: ₹${amount.toFixed(2)} <br>
    Compound Interest: ₹${interest.toFixed(2)}
  `;
}
