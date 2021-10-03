// Soal No. 1
const person = {
  name: "person A",
  age: 100,
  favDrinks: ["coffee", "jamu temulawak", "tea"],
  greeting: function () {
    console.log("hello world");
  },
};

person.name = "Yhido Tobing";
person.favDrinks[1] = "Tap Water";
person.greeting = function (name) {
  return `Hello, ${name}`;
};

// STOP

console.log(person.name);
console.log(person.age);
console.log(person.favDrinks);
console.log(person.greeting("John Watson"));

// Soal No.2
function getObjectValue(obj, str) {
  const strArray = str.split(".").map((s) => [s]);
  const result = obj[strArray[0]][strArray[1]][strArray[2]];
  if (result === undefined) {
    return null;
  } else {
    return result;
  }
}

const milkBasedCoffee = {
  name: "latte",
  ingredients: {
    espresso: {
      origin: "lampung",
      roastProfile: "medium to dark",
      ratio: 1,
    },
    milk: {
      brand: "susu murni",
      isVegan: false,
      ratio: 5,
    },
  },
};

const espresso = getObjectValue(milkBasedCoffee, "ingredients.espresso.origin");
const coffeeBrand = getObjectValue(
  milkBasedCoffee,
  "ingredients.espresso.brand"
);
const isMilkVegan = getObjectValue(milkBasedCoffee, "ingredients.milk.isVegan");

console.log(espresso);
console.log(coffeeBrand);
console.log(isMilkVegan);

// dibawah ini merupakan history transasksi yang telah kalian lakukan

// Soal No.3

const items = [
  {
    btc: { buy: 10, sell: 9 },
    eth: { buy: 8, sell: 7.5 },
    doge: { buy: 7, sell: 6.5 },
    day: 1,
  },
  {
    btc: { buy: 9, sell: 5 },
    eth: { buy: 7, sell: 4 },
    doge: { buy: 6, sell: 3 },
    day: 2,
  },
  {
    btc: { buy: 5, sell: 10 },
    eth: { buy: 4, sell: 6 },
    doge: { buy: 3, sell: 4 },
    day: 3,
  },
];

const calculateIncome = (items) => {
  let btcValue = 0;
  let ethValue = 0;
  let dogeValue = 0;
  for (let i = 0; i < items.length; i++) {
    btcValue += items[i].btc.buy - items[i].btc.sell;
    ethValue += items[i].eth.buy - items[i].eth.sell;
    dogeValue += items[i].doge.buy - items[i].doge.sell;
  }
  return {
    btc: btcValue,
    doge: dogeValue,
    eth: ethValue,
  };
};

console.log(calculateIncome(items));
