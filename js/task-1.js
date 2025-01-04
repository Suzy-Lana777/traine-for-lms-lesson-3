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

const first = { propA: 5, propB: 10, propC: 50 };
const second = { propC: 15, propD: 20 };

const third = { ...first, ...second };
console.log(third); // { propA: 5, propB: 10, propC: 15, propD: 20 }

const fourth = { ...second, ...first };
console.log(fourth); // { propA: 5, propB: 10, propC: 50, propD: 20 }
