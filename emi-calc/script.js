function calculateEMI() {
  const principal = parseFloat(document.getElementById("principal").value);
  const rate = parseFloat(document.getElementById("rate").value) / 12 / 100;
  const tenure = parseInt(document.getElementById("tenure").value);
  const result = document.getElementById("result");

  if (!principal || !rate || !tenure) {
    result.textContent = "Please fill in all fields.";
    return;
  }

  const emi = (principal * rate * Math.pow(1 + rate, tenure)) / (Math.pow(1 + rate, tenure) - 1);
  result.textContent = `Your monthly EMI is ₹${emi.toFixed(2)}.`;
}
