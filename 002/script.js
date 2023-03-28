function calculateBMI() {
  var weight = document.getElementById("weightInput").value;
  var height = document.getElementById("heightInput").value;

  var bmi = weight / (height * height);

  document.getElementById("bmiResult").innerHTML = "BMI is: " + bmi.toFixed();
}

var calculateBtn = document.getElementById("calculateBtn");
calculateBtn.addEventListener("click", calculateBMI);
