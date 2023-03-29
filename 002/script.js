function calculateBMI() {
  var weight = document.getElementById("weightInput").value;
  var height = document.getElementById("heightInput").value / 100;

  var bmi = weight / (height * height);

  document.getElementById("bmiResult").innerHTML = "BMI is: " + bmi.toFixed(2);
}

var calculateBtn = document.getElementById("calculateBtn");
calculateBtn.addEventListener("click", calculateBMI);
