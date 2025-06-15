document.getElementById("bmi-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const height = parseFloat(document.getElementById("height").value);
  const weight = parseFloat(document.getElementById("weight").value);
  const resultDiv = document.getElementById("result");

  if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
    resultDiv.textContent = "Please enter valid height and weight.";
    return;
  }

  const heightInMeters = height / 100;
  const bmi = weight / (heightInMeters * heightInMeters);
  const roundedBMI = bmi.toFixed(1);

  let message = "";

  if (bmi < 18.5) {
    message = "Underweight";
  } else if (bmi < 24.9) {
    message = "Normal weight";
  } else if (bmi < 29.9) {
    message = "Overweight";
  } else {
    message = "Obese";
  }

  resultDiv.textContent = `Your BMI is ${roundedBMI} (${message})`;
});
