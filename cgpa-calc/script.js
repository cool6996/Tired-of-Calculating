document.getElementById("cgpa-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const input = document.getElementById("grades").value;
  const result = document.getElementById("result");

  const grades = input.split(",").map(g => parseFloat(g.trim()));
  
  if (grades.length === 0 || grades.some(isNaN)) {
    result.textContent = "Please enter valid GPA values separated by commas.";
    return;
  }

  const total = grades.reduce((a, b) => a + b, 0);
  const cgpa = total / grades.length;

  result.textContent = `Your CGPA is ${cgpa.toFixed(2)}.`;
});
