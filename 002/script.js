// Define the function to calculate BMI
function calculateBMI() {
  // Get the weight and height values from the input fields
  const weight = document.getElementById("weightInput").value;
  const height = document.getElementById("heightInput").value;

  // Calculate the BMI
  const bmi = weight / (height * height);

  // Display the result on the web page
  document.getElementById("bmiResult").innerHTML =
    "Your BMI is: " + bmi.toFixed();
}
