// const planets = ['Earth', 'Mars', 'Venus']; // масив рядків
// const numbers = [1, 2, 3, 4, 5]; // масив чисел
// console.log(planets);
// console.log(numbers);

// const planets = ['Earth', 'Mars', 'Venus'];
// console.log(planets[0]); // 'Earth'
// console.log(planets[1]); // 'Mars'
// console.log(planets[2]); // 'Venus'

// const name = 'Mango';
// const letters = name.split('');
// console.log(letters);

// const message = 'JavaScript essentials';
// const words = message.split(' ');
// console.log(words);

function fillArray(min, max) {
  let arr = [];
  for (let i = min; i <= max; i += 2) {
    return arr.push(i);
  }
}

console.log(fillArray(2, 10));
