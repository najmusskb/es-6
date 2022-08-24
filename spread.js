// 30-7 Spread operator, array max, copy arrays


const math = Math.max(1, 2, 3, 5, 4, 8)
// console.log(math)

const numbers = [12, 36, 78, 95, 45];
const largest = Math.max(...numbers);
console.log(...numbers)
console.log(largest)


const numbers2 = numbers
numbers.push(55);
console.log(numbers2);
console.log(numbers);