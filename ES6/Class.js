class Cut {
  constructor() {
    this.ingredient = 'onion';
  }

  trimtheIngredient() {
    console.log('cut ' + this.ingredient);
  }
}

const cut = new Cut();
cut.trimtheIngredient(); // "cut onion"

class Cook extends Cut {
  constructor() {
    super();
    this.name = 'ramen';
  }

  makeRamen() {
    console.log('make ' + this.name);
  }
}

const cook = new Cook();
cook.trimtheIngredient(); // "cut onion"
cook.makeRamen(); // "make ramen"
