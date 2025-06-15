function calculateSI() {
  const principal = parseFloat(document.getElementById("principal").value);
  const rate = parseFloat(document.getElementById("rate").value);
  const time = parseFloat(document.getElementById("time").value);

  if (isNaN(principal) || isNaN(rate) || isNaN(time)) {
    document.getElementById("result").innerText = "Please enter all values.";
    return;
  }

  const si = (principal * rate * time) / 100;
  document.getElementById("result").innerText = `Simple Interest: ₹${si.toFixed(2)}`;
}
