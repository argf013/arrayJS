const calculate = (value) => {
  return value < 2 ? value : (calculate(value - 1) + calculate(value - 2))
}

let i = 3

console.log(calculate(i));
