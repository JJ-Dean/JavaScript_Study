//Spread Operator
//Array
const ingredient = ['tomato', 'onion'];
const newIngredient = [...ingredient, 'garlic', 'carrot'];
console.log(newIngredient); // [ 'tomato', 'onion', 'garlic', 'carrot' ]

//Object
const Tableware = {
  first: 'dishes',
};

const NewTableware = {
  ...Tableware,
  second: 'spoon',
};
console.log(NewTableware); // { first: 'dishes', second: 'spoon' }

//Rest Operator
const recipeFilter = (...recipes) => {
  return recipes.filter((el) => el === 1);
};

console.log(recipeFilter(1, 2, 3)); // [ 1 ]
