function calculateCalories() {
  const age = parseInt(document.getElementById("age").value);
  const gender = document.getElementById("gender").value;
  const weight = parseFloat(document.getElementById("weight").value);
  const height = parseFloat(document.getElementById("height").value);
  const activity = parseFloat(document.getElementById("activity").value);
  const result = document.getElementById("result");

  if (!age || !weight || !height || isNaN(activity)) {
    result.textContent = "Please fill in all fields.";
    return;
  }

  let bmr;
  if (gender === "male") {
    bmr = 10 * weight + 6.25 * height - 5 * age + 5;
  } else {
    bmr = 10 * weight + 6.25 * height - 5 * age - 161;
  }

  const calories = Math.round(bmr * activity);
  result.textContent = `Your daily calorie need is about ${calories} calories.`;
}
