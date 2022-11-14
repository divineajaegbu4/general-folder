function sum(n) {
  let result = 0;
  for (const element of n) {
    result += element;
  }
  return result;
}

console.log(sum([3, 5, 9, 15]));
