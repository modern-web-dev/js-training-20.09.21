let person = {
    'first-name': 'Marek',
    lastName: 'Matczak',
    age: 42,
    likesJavaScript: true,
    dateOfBirth: new Date('1979-01-25'),

    sayHello() {
        return `Hello, I am ${this['first-name']}`;
    }
};

// function Person(firstName, lastName, age) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
// }

// class Person {
//     constructor(firstName, lastName, age) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.age = age;
//     }
// }

// const marek = new Person('Marek', 'Matczak', 42);


const prop = 'first-name';
person.address = {
    zipCode: '53-601',
    street: 'Teczowa',
    streetNumber: 0
};

delete person.dateOfBirth;

// false, undefined, null, 0, '', NaN

// if (person['address']) {
//     console.log(person['address'].streetNumber ?? '');
// }
// console.log(person);
const add = (a, b) => a + b;

console.log(person.sayHello());



// function add(a, b) { // function declaration
//     let abc = 'dljl';
//     return a + b;
// }
