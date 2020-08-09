/* /* 

function inDegree(value, exp) {
    let result = value;
    for (let i = 2; i <= exp; i++) {

        result *= value;

    }
    return result;
}


function getMaxValue(number1, number2) {
    if (number1 > number2) {
        return number1;
    }

    return number2;

    
}


function getMinValue(number1, number2) {

    if (number1 < number2) {
        return number1;
    }

    return number2;
    
/* } */
/* 
function isEven(num) {
    return num % 2 === 0;

}

*/

/* let num1 = prompt("Введите число:");
let num2 = prompt("Введите число:");
alert(inDegree(num1, num2));
alert(getMinValue(num1, num2));
alert(getMaxValue(num1, num2));

let num = prompt("Введите число:")
alert(isEven(num));
 */

/* const table = {
 width: 110,
 height: 110,
 run()
 {
    
    "Run run run ....."
    return null;
 }
}; */


/* function Cat(color, breed, name) {

    this.color = color;
    this.breed = breed;
    this.name = name;
    this.present = function (name) {
        return `Hi my name is ${this.name}`;
    };

    
}


const cat1 = new Cat('red','abbessin', "Murzik");
const cat2 = new Cat('grey','abbessin', "Vasya"); */


function Country (name, population, area,) {
    
    this.name = name;
    this.population = population;
    this.area = area;
    this.getDensity = function () {

        return this.population / this.area;
        
    };
    
}

const ua = new Country ("Ukraine", 41806221, 603549);
/* const jp = new ua("Nippon", 5000000, 23); */


function Car (mark, model, accelerate) {
    
    this.mark = mark;
    this.model = model;
    this.speed = function (this.accelerate) {
            this.speed = this.speed + this.accelerate; 
    };
    this.accelerate = accelerate;
    this.status = function () {

        if (this.speed > 0) {
            return "Driving"
        }
        return "Parking"; 
    };

}

const car1 = new Car ("Skoda", "Octavia", 120);
