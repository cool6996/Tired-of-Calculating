document.getElementById("percentage-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const value = parseFloat(document.getElementById("value").value);
  const total = parseFloat(document.getElementById("total").value);
  const result = document.getElementById("result");

  if (isNaN(value) || isNaN(total) || total === 0) {
    result.textContent = "Please enter valid numbers (and total ≠ 0).";
    return;
  }

  const percentage = (value / total) * 100;
  result.textContent = `${value} is ${percentage.toFixed(2)}% of ${total}.`;
});
