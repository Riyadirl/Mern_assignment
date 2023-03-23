function gradeCalculator(number) {
  if (number >= 90 && number <= 100) {
    return "A";
  } else if (number >= 80 && number <= 89) {
    return "B";
  } else if (number >= 70 && number <= 79) {
    return "C";
  } else if (number >= 60 && number <= 69) {
    return "D";
  } else if (number >= 0 && number <= 59) {
    return "F";
  } else {
    return "error";
  }
}

console.log(gradeCalculator(85));
