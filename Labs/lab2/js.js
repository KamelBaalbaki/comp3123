const gretter = (myArray, counter) => {
    var greetText = "Hello ";
    for (let name of myArray) {
        console.log(greetText + name)
    }
}

gretter(["Randy Savage", "Ric Flair", "Hulk Hogan"], 3)

const capitalize  = ([firstLetter, ...rest]) => {
    return firstLetter.toUpperCase() + rest.join("").toLowerCase();
}

console.log(capitalize ("fooBar"))
console.log(capitalize ("nodeJs"))

const colors = ['red', 'green', 'blue'];

const capitalizedColors = colors.map(color => capitalize(color));

console.log(capitalizedColors);

const filterLessThan20 = (myArray) => {
    return myArray.filter(value => value < 20)
}

const values = [1, 60, 34, 30, 20, 5];

console.log(filterLessThan20(values));

const calculateSum = (myArray) => {
    return myArray.reduce((sum, value) => sum + value)
}

const calculateProduct = (myArray) => {
    return myArray.reduce((total, value) => total * value)
}

var array = [1,2,3,4]

console.log(calculateSum(array));
console.log(calculateProduct(array));


class Car {
    constructor(model, year) {
        this.model = model;
        this.year = year;
    }

    details() {
        return `Model: ${this.model} Engine ${this.year}`;
    }
}

class Sedan extends Car {
    constructor(model, year, balance) {
        super(model, year);
        this.balance = balance;
    }

    info() {
        return `${this.model} has a balance of $${this.balance}`;
    }
}

const car2 = new Car("Pontiac Firebird", 1976);
console.log(car2.details());

const sedan = new Sedan("Volvo SD", 2018, 30000);
console.log(sedan.info());