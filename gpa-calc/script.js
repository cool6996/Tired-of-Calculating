document.getElementById("gpa-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const gradeMap = {
    "A1": 10, "A2": 9,
    "B1": 8, "B2": 7,
    "C1": 6, "C2": 5,
    "D": 4, "E": 2,
    "F": 0
  };

  const input = document.getElementById("grades").value.trim().toUpperCase();
  const grades = input.split(/\s+/);

  if (grades.length === 0) {
    document.getElementById("result").textContent = "Please enter at least one grade.";
    return;
  }

  let total = 0;
  let validCount = 0;
  let invalidGrades = [];

  grades.forEach((grade) => {
    if (gradeMap[grade] !== undefined) {
      total += gradeMap[grade];
      validCount++;
    } else {
      invalidGrades.push(grade);
    }
  });

  if (validCount === 0) {
    document.getElementById("result").textContent = "No valid grades entered.";
    return;
  }

  const gpa = (total / validCount).toFixed(2);
  let resultText = `Your GPA is ${gpa}`;
  if (invalidGrades.length > 0) {
    resultText += ` (Ignored invalid grades: ${invalidGrades.join(", ")})`;
  }

  document.getElementById("result").textContent = resultText;
});
