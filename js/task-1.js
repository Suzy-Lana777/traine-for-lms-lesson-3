// const planets = ['Earth', 'Mars', 'Venus']; // масив рядків
// const numbers = [1, 2, 3, 4, 5]; // масив чисел
// console.log(planets);
// console.log(numbers);
// ===================================================
// const planets = ['Earth', 'Mars', 'Venus'];
// console.log(planets[0]); // 'Earth'
// console.log(planets[1]); // 'Mars'
// console.log(planets[2]); // 'Venus'
// ================================================
// const name = 'Mango';
// const letters = name.split('');
// console.log(letters);

// const message = 'JavaScript essentials';
// const words = message.split(' ');
// console.log(words);

// function fillArray(min, max) {
//   let arr = [];
//   for (let i = min; i <= max; i += 2) {
//     return arr.push(i);
//   }
// }

// console.log(fillArray(2, 10));

// const book = {
//   title: 'The Last Kingdom',
//   author: 'Bernard Cornwell',
//   genres: ['historical prose', 'adventure'],
//   isPublic: true,
//   rating: 8.38,
// };
// =========================================
// const bookTitle = book.title;
// console.log(bookTitle); // "The Last Kingdom"

// const bookGenres = book.genres;
// console.log(bookGenres); // ["historical prose", "adventure"]

// const bookPrice = book.price;
// console.log(bookPrice); // undefined
// =====================================
//
// const book = {
//   title: 'The Last Kingdom',
//   author: 'Bernard Cornwell',
//   genres: ['historical prose', 'adventure'],
//   isPublic: true,
//   rating: 8.38,
// };

// console.log(book.title); // "The Last Kingdom"
// console.log(book['title']); // "The Last Kingdom"

// console.log(book.genres); // ["historical prose", "adventure"]
// console.log(book['genres']); // ["historical prose", "adventure"]

// const propKey = 'author';
// console.log(book.author); // undefined
// console.log(book[propKey]); // "Bernard Cornwell"
// ======================================================

//
// const bookShelf = {
//   books: [
//     { title: 'The Last Kingdom', rating: 8 },
//     { title: 'The Mist', rating: 6 },
//   ],
//   getAvarageRating() {
//     let totalRating = 0;

//     for (const book of this.books) {
//       totalRating += book.rating;
//     }

//     return totalRating / this.books.length;
//   },
// };

// bookShelf.getAvarageRating(); // 7
// ---------------------------------------------

// const first = { propA: 5, propB: 10, propC: 50 };
// const second = { propC: 15, propD: 20 };

// const third = { ...first, ...second };
// console.log(third); // { propA: 5, propB: 10, propC: 15, propD: 20 }

// const fourth = { ...second, ...first };
// console.log(fourth); // { propA: 5, propB: 10, propC: 50, propD: 20 }

//  !===============================================================

// =========
// const students = [
//   { name: 'Mango', courses: ['mathematics', 'physics'] },
//   { name: 'Poly', courses: ['science', 'mathematics'] },
//   { name: 'Kiwi', courses: ['physics', 'biology'] },
// ];

// const mappedCourses = students.map(student => student.courses);
// console.log(mappedCourses); // [["mathematics", "physics"], ["science", "mathematics"], ["physics", "biology"]]

// const flattenedCourses = students.flatMap(student => student.courses);
// console.log(flattenedCourses); // ["mathematics", "physics", "science", "mathematics", "physics", "biology"];
// ==================================================================================

// const values = [51, -3, 27, 21, -68, 42, -37];

// const positiveValues = values.filter(value => value >= 0);
// console.log(positiveValues); // [51, 27, 21, 42]
// // до positiveValues потрапили всі елементи масиву values, які задовольнили умову колбека, тобто були >= 0

// const negativeValues = values.filter(value => value < 0);
// console.log(negativeValues); // [-3, -68, -37]
// // до negativeValues потрапили всі елементи масиву values, які задовольнили умову колбека, тобто були < 0

// const bigValues = values.filter(value => value > 1000);
// console.log(bigValues); // []
// // до negatibigValues eValues потрапили всі елементи масиву values, які задовольнили умову колбека, тобто були > 1000

// console.log(values); // [51, -3, 27, 21, -68, 42, -37]
// // Оригінальний масив values не змінився
// ====================================================

// const products = [
//   { name: 'apple', quantity: 2 },
//   { name: 'orange', quantity: 5 },
//   { name: 'plum', quantity: 0 },
// ];

// const hasEveryProduct = products.every(product => product.quantity > 0);
// console.log(hasEveryProduct); // false

// МОДУЛЬ 6

// const book = {
//   updateTitle(newTitle) {
//     console.log(this);
//   },
// };

// const update = book.updateTitle;

// update('Lord Of The Rings');
// ================================
'use strict';

// const customer = {
//   firstName: 'Jacob',
//   lastName: 'Mercer',
//   getFullName() {
//     return `${this.firstName} ${this.lastName}`;
//   },
// };

// function makeMessage(callback) {
//   // callback() — це виклик методу getFullName в глобальному контексті
//   const username = callback();
//   console.log(`Processing an application from ${username}`);
// }

// makeMessage(customer.getFullName.bind(customer)); // TypeError: Cannot read properties of undefined (reading 'firstName')

// const library = {
//   books: 1923,
//   logBookCount() {
//     console.log(this.books);
//   },
// };

// const showBooks = library.logBookCount.bind({ books: 724 });

// showBooks();
// ---------------------------
// 'use strict';

// const showThis = () => {
//   console.log('this in showThis: ', this);
// };

// showThis(); // this in showThis: window
// ==========================================
// const customer = {
//   username: 'Jacob',
// };

// const animal = {
//   legs: 4,
// };

// const dog = Object.create(animal);
// dog.name = 'Mango';

// console.log(dog); // { name: "Mango", [[Prototype]]: animal }

// console.log(animal.isPrototypeOf(dog)); // true
// console.log(dog.isPrototypeOf(animal)); // false
// console.log(customer.isPrototypeOf(dog)); // false
// ========================================================
// const objC = { c: 'objC prop' };

// const objB = Object.create(objC);
// objB.b = 'objB prop';

// const objA = Object.create(objB);
// objA.a = 'objA prop';

// console.log(objA); // { a: "objA prop", [[Prototype]]: objB }
// console.log(objB); // { b: "objB prop", [[Prototype]]: objC }
// console.log(objC); // { c: "objC prop", [[Prototype]]: Object }
// ===================================================================

// class User {
//   constructor(params) {
//     this.name = params.name;
//     this.email = params.email;
//   }

//   getEmail() {
//     return this.email;
//   }

//   changeEmail(newEmail) {
//     this.email = newEmail;
//   }
// }

// const mango = new User({
//   name: 'Mango',
//   email: 'mango@mail.com',
// });

// console.log(mango.getEmail()); // “mango@mail.com”
//
// =======================================================

// class User {
//   constructor(params) {
//     this.name = params.name;
//     this.email = params.email;
//   }

//   getEmail() {
//     return this.email;
//   }

//   changeEmail(newEmail) {
//     this.email = newEmail;
//   }
// }

// console.log(User.prototype); // {constructor: ƒ, getEmail: ƒ, changeEmail: ƒ}
