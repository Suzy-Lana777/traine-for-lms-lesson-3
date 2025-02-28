// function formatMessage(message, maxLength) {
//   if (message.length <= maxLength) {
//     return message;
//   } else {
//     return message.slice(0, maxLength) + '...';
//   }
// }
// console.log(formatMessage('Curabitur ligula sapien', 16)); // "Curabitur ligula..."
// console.log(formatMessage('Curabitur ligula sapien', 23)); // "Curabitur ligula sapien"
// console.log(formatMessage('Vestibulum facilisis purus nec', 20)); // "Vestibulum facilisis..."
// console.log(formatMessage('Vestibulum facilisis purus nec', 30)); // "Vestibulum facilisis purus nec"
// console.log(formatMessage('Nunc sed turpis a felis in nunc fringilla', 15)); // "Nunc sed turpis..."
// console.log(formatMessage('Nunc sed turpis a felis in nunc fringilla', 41)); // "Nunc sed turpis a felis in nunc fringilla"

// const heading = document.createElement('h1');
// headding.classList.add('title');
// heading.textContent = 'This is a heading';
// console.log(heading); // <h1 class="title">This is a heading</h1>

// const image = document.createElement('img');
// image.src = 'https://picsum.photos/id/11/320/240';
// image.alt = 'Nature';
// console.log(image); // <img src="https://picsum.photos/id/11/320/240" alt="Nature" />

// const dog = {
//   name: 'Mango',
//   age: 3,
//   isGoodBoy: true,
// };

// const json = JSON.stringify(dog);
// console.log(json); // '{"name":"Mango","age":3,"isGoodBoy":true}'

// const data = JSON.parse('Well, this is awkward');
// console.log("❌ You won't see this log");

// try {
//   const data = JSON.parse('Well, this is awkward');
// } catch (error) {
//   console.log(error.name); // "SyntaxError"
//   console.log(error.message); // Unexpected token W in JSON at position 0
// }

// console.log('✅ This is fine, we handled parsing error in try...catch');

// localStorage.setItem('ui-theme', 'light');
// console.log(localStorage); // Storage {ui-theme: "light", length: 1}

// const settings = {
//   theme: 'dark',
//   isAuthenticated: true,
//   options: [1, 2, 3],
// };

// localStorage.setItem('settings', JSON.stringify(settings));

// sessionStorage.setItem('user-id', '123');
// sessionStorage.setItem('tickets', JSON.stringify({ from: 'Lviv', to: 'Kyiv', quantity: 2 }));
// console.log(sessionStorage);
// // Storage {user-id: '123', tickets: '{"from":"Lviv","to":"Kyiv","quantity":2}', length: 2}

// const form = document.querySelector('.feedback-form');
// const textarea = form.elements.message;
// const localStorageKey = 'goit-example-message';

// textarea.value = localStorage.getItem(localStorageKey) ?? '';

// form.addEventListener('input', evt => {
//   localStorage.setItem(localStorageKey, evt.target.value);
// });

// form.addEventListener('submit', evt => {
//   evt.preventDefault();
//   console.log(evt.target.elements.message.value);
//   localStorage.removeItem(localStorageKey);
//   form.reset();
// });
// ==============lesson 10=========================

// const date = new Date('2030-03-16T14:25:00');
// console.log(date); // "Sat Mar 16 2030 14:25:00 GMT+0200"

// console.log(new Date(0));
// // "Thu Jan 01 1970 03:00:00 GMT+0300 (Eastern European Standard Time)"

// console.log(new Date(15000));
// // "Thu Jan 01 1970 03:00:15 GMT+0300 (Eastern European Standard Time)"

// const date = new Date();
// console.log(date.getTime()); // 1624021654154
// ================================================
// const startTime = Date.now();

// // Твій код, виконуваний упродовж деякого часу
// for (let i = 0; i <= 100; i += 1) {
//   console.log(i);
// }

// const endTime = Date.now();
// const elapsedTime = endTime - startTime;

// console.log(`Elapsed time: ${elapsedTime} ms`);
// =================================================
// const date = new Date('March 16, 2030 14:25:00');
// console.log('Date: ', date); // "Sat Mar 16 2030 14:25:00 GMT+0200"

// // Повертає день місяця від 1 до 31
// console.log('Day: ', date.getDate()); // 16

// // Повертає день тижня від 0 до 6, починається з неділі
// console.log('Day of the week: ', date.getDay()); // 6

// // Повертає місяць від 0 до 11
// console.log('Month: ', date.getMonth()); // 2

// // Повертає рік з 4 цифр
// console.log('Full year: ', date.getFullYear()); // 2030

// // Повертає години
// console.log('Hours: ', date.getHours()); // 14

// // Повертає хвилини
// console.log('Minutes: ', date.getMinutes()); // 25

// // Повертає секунди
// console.log('Seconds: ', date.getSeconds()); // 0

// // Повертає мілісекунди
// console.log('Milliseconds: ', date.getMilliseconds()); // 0

// const date = new Date('March 16, 2030 14:25:00');

// date.setMinutes(50);
// console.log(date); // "Sat Mar 16 2030 14:50:00 GMT+0200"

// date.setFullYear(2040);
// console.log(date); // "Fri Mar 16 2040 14:50:00 GMT+0200"

// date.setMonth(4);
// console.log(date); // "Wed May 16 2040 14:50:00 GMT+0300"
// ====================================================

// const isSuccess = true;

// // Create promise
// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (isSuccess) {
//       resolve('Success! Value passed to resolve function');
//     } else {
//       reject('Error! Error passed to reject function');
//     }
//   }, 2000);
// });

// // Registering promise callbacks
// promise
//   .then(value => {
//     console.log(value); // "Success! Value passed to resolve function"
//   })
//   .catch(error => {
//     console.log(error); // "Error! Error passed to reject function"
//   });
// ===========================================================

// const isSuccess = true;

// // Create promise
// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (isSuccess) {
//       resolve('Success! Value passed to resolve function');
//     } else {
//       reject('Error! Error passed to reject function');
//     }
//   }, 2000);
// });

// // Registering promise callbacks
// promise
//   .then(value => console.log(value)) // "Success! Value passed to resolve function"
//   .catch(error => console.log(error)) // "Error! Error passed to reject function"
//   .finally(() => console.log('Promise settled')); // "Promise settled"

// const date = new Date();
// console.log(date);

// const start = new Date('2030-04-23');
// const end = new Date('2030-05-17');
// console.log(end - start);
// ================
// setTimeout(() => {
//   alert(`hello`);
// });
// setTimeout(2000);
// ===================

// const firstTimeout = setTimeout(() => {}, 5000);
// console.log(firstTimeout);

// зворотній відлік
// let myPromise = new Promise(function (myResolve, myReject) {
//   let req = new XMLHttpRequest();
//   req.open('GET', 'mycar.htm');
//   req.onload = function () {
//     if (req.status == 200) {
//       myResolve(req.response);
//     } else {
//       myReject('File not Found');
//     }
//   };
//   req.send();
// });

// myPromise.then(
//   function (value) {
//     myDisplayer(value);
//   },
//   function (error) {
//     myDisplayer(error);
//   }
// );
const notification = document.querySelector('.js-alert');

function showNotification() {
  notification.classList.add('is-visible');
}

function hideNotification() {
  notification.classList.remove('is-visible');
}
showNotification();
hideNotification();
