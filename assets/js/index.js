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


function Car (mark, model, accelerate) {
    
    this.mark = mark;
    this.model = model;

    this.isGoing = false; 
    this.speed = null;
    this.accelerate = accelerate; 
    this.status = function (speed) {
            this.speed = this.accelerate;
            this.isGoing = speed !== 0;
            return this.speed;
    }
    this.speed = this.status();
}

const car1 = new Car ("Skoda", "Octavia", 120);



function Box(size, color, content) {

    this.size = size;
    this.color = color;
    this.content = content;
    this.open = function () {

        return `${this.content} opened`
        
    }
    
}

function Create(size, material, content) {

    this.size = size;
    this.material = material;
    this.content = content;
}

Create.prototype = new Box();



function User(isMale, age, name, sayHi) {
    this.isMale = false;
    this.age = age;
    this.name = name;
    this.sayHi = function () {
        return `Hi, my name is ${this.name}`
    }
    
}


function Employee(age, name, salary) {
    this.isMale = false;
    this.age = age;
    this.name = name;
    this.salary = salary;
    
}

Employee.prototype = new User();

const employee1 = new Employee (33, "Vasya", 1000);




const controlObj = {
    content: "content",
    test: "test",
}


const anotherObj = controlObj;



//Arrays



function logArrayElements(countryArr) {

    for (let i = 0; i < countryArr.length; i++){
        console.log(countryArr[i]);
    }     
    return countryArr;
    
}
const countryArr = [
    "Ukraine",
    "Poland",
    "GrateBritain",
    "UnatedStates",
    "Turkie",
    "Japan",
    "China",
    "Grece",
    "Canada",
    "Brasil",
];

logArrayElements(countryArr);

function MyArray() {

    this.length = 0;

    for (let i = 0; i < arguments.length; i++) {
        this[this.length] = arguments[i];
        this.length++;
        
    };

    this.push = function () {
        
        for (let i = 0; i < arguments.length; i++) {
            this[this.length] = arguments[i];
            this.length ++;
        }
        return this.length
    };

    this.pop = function () {

        
        if (this.length > 0) {
            let delValue = this[this.length - 1];
            delete this[this.length - 1];
            return delValue;
            
        } else {
            return "Empty Array"
        }

    };
    
    
};


const myArr = new MyArray("a","s","d","f","g");



const input = prompt("Chose from menu: 1 - Cake; 2 - Pizza; 3 - Rattatooe");

switch (input) {
    case 1:
        {
            console.log ("sweet tooth");
        }
        break;
    case 2:
        {
            console.log ("sweet tooth");
        }
        break;

    case 3:
        {
            console.log ("It's the best choice");
        }
        break;    

    default:
        {
            console.log("You choice incorrect");
        }
        break;
}

let a = 4;
const squire = a => a ** 2;
squire(a);

