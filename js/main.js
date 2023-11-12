class Hamburger {
  constructor(size, stuffing) {
    this.size = size;
    this.stuffing = stuffing;
  }
  topping = [];
  price;
  calories;

  static SIZE_BIG = {
    size: 'BIG',
    price: '100 tugriks',
    calories: 40,
  }
  static SIZE_SMALL = {
    size: 'SMALL',
    price: '50 tugriks',
    calories: 20,
  }

  static STUFFING_CHEESE = {
    stuffing: 'CHEESE',
    price: '10 tugriks',
    calories: 20,
  }
  static STUFFING_SALAD = {
    stuffing: 'SALAD',
    price: '20 tugriks',
    calories: 5,
  }
  static STUFFING_POTATO = {
    stuffing: 'POTATO',
    price: '15 tugriks',
    calories: 10,
  }

  static TOPPING_MAYO = {
    type: 'MAYO',
    price: '20 tugrik',
    calories: 5,
  }
  static TOPPING_SAUCE = {
    type: 'SAUCE',
    price: '15 tugriks',
    calories: 0,
  }

  addTopping (additive) {
    this.topping.push(additive);
  }

  calculatePrice() {
    let {price: hamburgerPrice} = Hamburger;
    const {price: sizePrice} = this.size;
    const {price: stuffingPrice} = this.stuffing;
    
    if(this.topping.length === 0) {
      hamburgerPrice = Number.parseInt(sizePrice) + Number.parseInt(stuffingPrice);
      this.price = hamburgerPrice;
    } 
    if(this.topping.length > 0) {
      const toppingPrice = this.topping.map(obj => obj.price).reduce((totalPrice, currentPrice) => Number.parseInt(totalPrice) + Number.parseInt(currentPrice),);
      hamburgerPrice = Number.parseInt(sizePrice) + Number.parseInt(stuffingPrice) + Number.parseInt(toppingPrice);
      this.price = hamburgerPrice;
    }
    return hamburgerPrice;
  }

  calculateCalories() {
    let {calories: hamburgerCalories} = Hamburger;
    const {calories: sizeCalories} = this.size;
    const {calories: stuffingCalories} = this.stuffing;

    if(this.topping.length === 0) {
      hamburgerCalories = sizeCalories + stuffingCalories;
      this.calories = hamburgerCalories; 
    }
    if(this.topping.length > 0) {
      const toppingCalories = this.topping.map(obj => obj.calories).reduce((totalCalories, currentCalories) => totalCalories + currentCalories,);
      hamburgerCalories = sizeCalories + stuffingCalories + toppingCalories;
      this.calories = hamburgerCalories;
    }
    return hamburgerCalories;
  }
}

const hamburger = new Hamburger(Hamburger.SIZE_BIG, Hamburger.STUFFING_CHEESE);
console.log('Currently hamburger price without toppoing is: ' + hamburger.calculatePrice() + ' tugriks');
console.log('Hamburger calories without topping: ' + hamburger.calculateCalories() + ' calories');

hamburger.addTopping(Hamburger.TOPPING_MAYO);
console.log('Hamburger price with mayonaisse is: ' + hamburger.calculatePrice() + ' tugriks');
console.log('Hamburger calories with mayonnaise: ' + hamburger.calculateCalories() + ' calories');

hamburger.addTopping(Hamburger.TOPPING_SAUCE);
console.log('Hamburger price with mayonnaise and sauce is: ' + hamburger.calculatePrice() + ' tugriks');
console.log('Hamburger calories with mayonnaise and sauce: ' + hamburger.calculateCalories() + ' calories');

console.log(hamburger);