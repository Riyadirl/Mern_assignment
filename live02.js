const originalarray = [1, 6, 2, 7, 3, 8, 4, 9, 5, 10];

const newArray = originalarray.map((value) => {
  if (value < 5) {
    return (value = value + 10);
  }
  return value;
});

console.log(newArray);
