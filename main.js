// Code Question 1
// Senza lanciare il codice, riesci a prevedere cosa viene stampato in console ?
// Quanti oggetti sono stati creati in memoria durante l'esecuzione di questo codice?

const hamburger = { name: "Cheese Burger", weight: 250 };
const secondBurger = hamburger;
secondBurger.name = 'Double Cheese Burger';
secondBurger.weight = 500;

console.log(hamburger.name); // 'Double Cheese Burger'
console.log(secondBurger.name); // 'Double Cheese Burger'
// in memoria è stato creato un solo oggetto

// Code Question 2
const hamburger = {
    name: "Cheese Burger",
    weight: 250,
    ingredients: ["Cheese", "Meat", "Bread", "Tomato"]
};

const secondBurger = { ...hamburger };
secondBurger.ingredients[0] = "Salad";

console.log(hamburger.ingredients[0]); // 'Salad'
console.log(secondBurger.ingredients[0]); // 'Salad'
// in memoria sono stati creati due oggetti

// Code Question 3
const hamburger = {
    name: "Cheese Burger",
    weight: 250,
    maker: {
        name: "Anonymous Chef",
        restaurant: {
            name: "Hyur's Burgers",
            address: "Main Street, 123",
            isOpen: true,
        },
        age: 29
    }
};

const secondBurger = structuredClone(hamburger);
const thirdBurger = structuredClone(hamburger);
// in memoria sono stati creati tre oggetti

// Code Question 4
const chef = {
    name: "Chef Hyur",
    age: 29,
    makeBurger: (num = 1) => {
        console.log(`Ecco ${num} hamburger per te!`);
    },
}

const restaurant = {
    name: "Hyur's Burgers",
    address: {
        street: 'Main Street',
        number: 123,
    },
    openingDate: new Date(2025, 3, 11),
    isOpen: false,
};
// il metodo migliore per clonare l’oggetto chef è utilizzando lo spread operator perché no contiene proprietà annidate
// il metodo migliore per clonare l’oggetto restaurant è con structuredClone() perché ha una proprietà annidata (address), quindi serve una deep copy. Questo metodo inoltre ci permette di mantenere il tipo Date corretto

// Code Question 5(Bonus)
const hamburger = {
    name: "Cheese Burger",
    weight: 250,
    maker: {
        name: "Anonymous Chef",
        restaurant: {
            name: "Hyur's Burgers",
            address: "Main Street, 123",
            isOpen: true,
        },
        age: 29
    }
};

const newRestaurant = { ...hamburger.maker.restaurant };
newRestaurant.name = "Hyur's II";
newRestaurant.address = "Second Street, 12";
const secondBurger = { ...hamburger };
secondBurger.maker.restaurant = newRestaurant;
secondBurger.maker.name = "Chef Hyur";

console.log(hamburger.maker.name); // 'Chef Hyur'
console.log(secondBurger.maker.name); // 'Chef Hyur'
console.log(hamburger.maker.restaurant.name); // 'Hyur's Burgers'
console.log(secondBurger.maker.restaurant.name); // 'Hyur's Burgers'
// in memoria sono stati creati tre oggetti

// Code Question 6(Bonus)
const chef = {
    name: "Chef Hyur",
    age: 29,
    makeBurger: (num = 1) => {
        console.log(`Ecco ${num} hamburger per te!`);
    },
    restaurant: {
        name: "Hyur's Burgers",
        welcomeClient: () => {
            console.log("Benvenuto!");
        },
        address: {
            street: 'Main Street',
            number: 123,
            showAddress: () => {
                console.log("Main Street 123");
            }
        },
        isOpen: true,
    }
}
/* 
Nessuno dei metodi visti permette di clonare completamente l'oggetto chef, perché contiene sia proprietà annidate che metodi.
I metodi di deep copy come JSON.parse(JSON.stringify()) o structuredClone() perdono i metodi.
Lo spread operator({ ...chef }) mantiene i metodi, ma fa solo una shallow copy, quindi le proprietà annidate rimangono legate all’oggetto originale.
Dunque nessuna delle soluzioni viste è ottimale.
*/
