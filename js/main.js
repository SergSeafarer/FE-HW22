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
}