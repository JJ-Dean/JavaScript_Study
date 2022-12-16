//Array
const numbers = [1, 2, 3];
[num1, , num3] = numbers;
console.log(num1, num3); // 1 3

//Object
const Ingredient = {
  name: 'carrot',
  color: 'orange',
};
let { name } = Ingredient;
console.log(name); // carrot
console.log(color); // ReferenceError: color is not defined
