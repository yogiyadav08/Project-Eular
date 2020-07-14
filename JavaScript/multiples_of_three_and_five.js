function multiplesOf3and5(number) {
  let arr = [];
  let num = 3
  while (num < number) {
    if (num % 3 == 0 || num % 5 == 0) {
       arr.push(num)
    }
    num++;
  }
  let sum = arr.reduce((a, b) => (a + b));

  return sum;
}
