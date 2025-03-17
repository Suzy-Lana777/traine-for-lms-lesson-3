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
// const notification = document.querySelector('.js-alert');

// function showNotification() {
//   notification.classList.add('is-visible');
// }

// function hideNotification() {
//   notification.classList.remove('is-visible');
// }
// showNotification();
// hideNotification();
// ==============================

// LESSON 10.2

// const fetchUserFromServer = (username, onSuccess, onError) => {
//   console.log(`Fetching data for ${username}`);

//   setTimeout(() => {
//     // Change value of isSuccess variable to simulate request status
//     const isSuccess = true;

//     if (isSuccess) {
//       onSuccess('success value');
//     } else {
//       onError('error');
//     }
//   }, 2000);
// };

// fetchUserFromServer(
//   'Mango',
//   user => console.log(user),
//   error => console.error(error)
// );
// ==========================
// ('🤑' або '👿')
// const startBtn = document.querySelector('.start-btn');
// const container = document.querySelector('.container');
// const result = document.querySelector('.result');

// function getRandomSmile(delay) {
//   const smile = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (Math.random() > 0.5) {
//         resolve('🤑');
//       } else {
//         reject('👿');
//       }
//     }, delay);
//   });

//   return smile;
// }

// startBtn.addEventListener('click', () => {
//   const promises = [];
//   for (let i = 0; i < 3; i++) {
//     container.children[i].textContent = '';
//     const s1 = getRandomSmile((i + 1) * 200);
//     s1.then(smile => {
//       container.children[i].textContent = smile;
//     }).catch(smile => {
//       container.children[i].textContent = smile;
//     });
//     promises.push(s1);
//   }

//   Promise.all(promises)
//     .then(() => {
//       result.textContent = 'You won';
//     })
//     .catch(() => {
//       result.textContent = 'Try again';
//     });
// });
// =========================================

// function fetchData(statusCode) {
//   return fetch(`https://httpstat.us/${statusCode}`).then(response => {
//     if (response.ok) {
//       return response;
//     } else {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }
//   });
// }

// fetchData(200)
//   .then(result => console.log(result))
//   .catch(error => console.log(error.message));
// fetchData(404)
//   .then(result => console.log(result))
//   .catch(error => console.log(error.message));
// fetchData(500)
//   .then(result => console.log(result))
//   .catch(error => console.log(error.message));

// ====================================

// const makePromise = ({ value, delay, shouldResolve = true }) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (shouldResolve) {
//         resolve(value);
//       } else {
//         reject(value);
//       }
//     }, delay);
//   });
// };

// makePromise({ value: 'A', delay: 1000 })
//   .then(value => console.log(value)) // "A"
//   .catch(error => console.log(error));

// makePromise({ value: 'B', delay: 3000 })
//   .then(value => console.log(value)) // "B"
//   .catch(error => console.log(error));

// makePromise({ value: 'C', delay: 2000, shouldResolve: false })
//   .then(value => console.log(value))
//   .catch(error => console.log(error)); // "C"
// ===================================================

// const p1 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve(1), 2000);
// });

// const p2 = new Promise((resolve, reject) => {
//   setTimeout(() => rejected(2), 1000);
// });

// Promise.race([p1, p2]).then(value => console.log(value));
// .catch(error => console.log(error)); // 2

// fetch('https://jsonplaceholder.typicode.com/users')
//   .then(response => {
//     // Response handling
//   })
//   .then(data => {
//     // Data handling
//   })
//   .catch(error => {
//     // Error handling
//   });
// ========================

// fetch('https://jsonplaceholder.typicode.com/users')
//   .then(response => {
//     if (!response.ok) {
//       throw new Error(`HTTP error! Status: ${response.status}`);
//     }
//     return response.json();
//   })
//   .then(data => {
//     // Data handling
//     console.log('Отримані дані:', data);
//   })
//   .catch(error => {
//     // Error handling
//     console.log('Помилка запиту:', error);
//   });
// =================================

// Ось приклад скрипту на мові програмування Java Script для застосунку,
// який реалізує функціонал пошуку зображень за ключовим словом і їх перегляду в галереї,
//   а також перевірку на порожність пошукового поля перед відправкою запиту:

// document.addEventListener('DOMContentLoaded', function() {
//     document.querySelector('.form').addEventListener('submit', function(event) {
//         event.preventDefault();
//         let searchText = document.querySelector('input[name="search-text"]').value;
//         if (searchText.trim() === '') {
//             alert('Будь ласка, введіть пошукове слово!');
//             return;
//         }

//         fetch('http://example.com/images/search?q=' + searchText)
//             .then(response => response.json())
//             .then(data => {
//                 // Відобразити зображення у галереї або виконати необхідні дії з отриманими даними
//                 console.log(data);
//             })
//             .catch(error => console.error('Сталася помилка під час виконання запиту: ', error));
//     });
// });

// Цей скрипт встановлює обробник події для події натискання на кнопку відправки форми,
//   який перевіряє, чи є поле пошуку порожнім перед відправкою запиту.Якщо поле не порожнє,
//   то виконується HTTP - запит за вказаним пошуковим словом.Якщо запит успішний,
//     результат зображень можна обробити або показати у галереї.

// ========

//     !DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
//   <meta name="viewport" content="width=device-width, initial-scale=1.0">
//   <title>Image Search Gallery</title>
//   <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/simplelightbox@2.8.0/dist/simple-lightbox.min.css">
//   <style>
//     .loader {
//       border: 16px solid #f3f3f3;
//       border-top: 16px solid #3498db;
//       border-radius: 50%;
//       width: 120px;
//       height: 120px;
//       animation: spin 2s linear infinite;
//       display: none;
//     }

//     @keyframes spin {
//       0% { transform: rotate(0deg); }
//       100% { transform: rotate(360deg); }
//     }
//   </style>
// </head>
// <body>
//   <form id="search-form">
//     <input type="text" id="search-input" placeholder="Enter keyword for image search">
//     <button type="submit">Search</button>
//   </form>

//   <div class="loader"></div>

//   <div id="gallery"></div>

//   <!-- Include jQuery before SimpleLightbox -->
//   <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
//   <script src="https://cdn.jsdelivr.net/npm/simplelightbox@2.8.0/dist/simple-lightbox.min.js"></script>

//   <script>
//     const searchForm = document.getElementById('search-form');
//     const searchInput = document.getElementById('search-input');
//     const loader = document.querySelector('.loader');
//     const gallery = document.getElementById('gallery');

//     searchForm.addEventListener('submit', function(event) {
//       event.preventDefault();

//       const searchKeyword = searchInput.value.trim();

//       loader.style.display = 'block';
//       gallery.innerHTML = '';

//       fetch(`https://backend-url/image-search?keyword=${searchKeyword}`)
//         .then(response => {
//           loader.style.display = 'none';
//           return response.json();
//         })
//         .then(data => {
//           if (data.length === 0) {
//             gallery.innerHTML = '<p>No results found.</p>';
//           } else {
//             data.forEach(imageUrl => {
//               const img = document.createElement('img');
//               img.src = imageUrl;
//               gallery.appendChild(img);
//             });
//             SimpleLightbox.refresh();
//           }
//         })
//         .catch(error => {
//           console.error('Error fetching images:', error);
//           loader.style.display = 'none';
//           gallery.innerHTML = '<p>An error occurred. Please try again.</p>';
//         });
//     });

//     gallery.addEventListener('click', function(event) {
//       if (event.target.tagName === 'IMG') {
//         new SimpleLightbox(event.target).show();
//       }
//     });
//   </script>
// </body>
// </html>

// /* Style for loader */
// .loader {
//   border: 16px solid #f3f3f3;
//   border-top: 16px solid #3498db;
//   border-radius: 50%;
//   width: 120px;
//   height: 120px;
//   animation: spin 2s linear infinite;
//   display: none;
// }

// @keyframes spin {
//   0% { transform: rotate(0deg); }
//   100% { transform: rotate(360deg); }
// }

// // JavaScript for image search gallery
// const searchForm = document.getElementById('search-form');
// const searchInput = document.getElementById('search-input');
// const loader = document.querySelector('.loader');
// const gallery = document.getElementById('gallery');

// // Event listener for form submission
// searchForm.addEventListener('submit', function(event) {
//   event.preventDefault();

//   const searchKeyword = searchInput.value.trim();

//   loader.style.display = 'block';
//   gallery.innerHTML = '';

//   // Fetch images based on search keyword from backend
//   fetch(`https://backend-url/image-search?keyword=${searchKeyword}`)
//     .then(response => {
//       loader.style.display = 'none';
//       return response.json();
//     })
//     .then(data => {
//       if (data.length === 0) {
//         gallery.innerHTML = '<p>No results found.</p>';
//       } else {
//         data.forEach(imageUrl => {
//           const img = document.createElement('img');
//           img.src = imageUrl;
//           gallery.appendChild(img);
//         });
//         SimpleLightbox.refresh();
//       }
//     })
//     .catch(error => {
//       console.error('Error fetching images:', error);
//       loader.style.display = 'none';
//       gallery.innerHTML = '<p>An error occurred. Please try again.</p>';
//     });
// });

// // Event listener for opening enlarged image in modal
// gallery.addEventListener('click', function(event) {
//   if (event.target.tagName === 'IMG') {
//     new SimpleLight
// ===========================

// fetch('some-url', {
//   headers: {
//     'Content-Type': 'application/json',
//     'X-Custom-Header': 'custom value',
//   },
// });

// function postData() {
//   return fetch('https://jsonplaceholder.typicode.com/posts', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({
//       title: 'foo',
//       body: 'bar',
//       userId: 1,
//     }),
//   }).then(response => response.json());
// }

// postData().then(result => console.log(result));
// ====================================================

import axios from 'axios';

axios
  .get('https://jsonplaceholder.typicode.com/users')
  .then(response => {
    console.log(response.data);
    console.log(response.status);
    console.log(response.statusText);
    console.log(response.headers);
    console.log(response.config);
  })
  .catch(error => {
    console.log(error);
  });
