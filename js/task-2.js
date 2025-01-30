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

const heading = document.createElement('h1');
headding.classList.add('title');
heading.textContent = 'This is a heading';
console.log(heading); // <h1 class="title">This is a heading</h1>

const image = document.createElement('img');
image.src = 'https://picsum.photos/id/11/320/240';
image.alt = 'Nature';
console.log(image); // <img src="https://picsum.photos/id/11/320/240" alt="Nature" />
