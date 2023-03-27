console.log('firstExercise start----------------------');
let firstExercise = [];
for (let i = 10; i <= 20; i++) {
  firstExercise.push(i);
}
console.log(firstExercise.join(','));

console.log('firstExercise end----------------------');

console.log('secondExercise start----------------------');

for(let i = 10; i < 21; i++) {
  console.log("КВАДРАТ " + i + " = " + i * i);
}

console.log('secondExercise end----------------------');

console.log('thirdExercise start----------------------');

let thirdExercise = '';
  for(let i = 1; i <= 7; i++) {
    for(let j = 1; j <= 7; j++) {
      thirdExercise = (i * j) + ' ';
    }
    console.log(thirdExercise);
  }
  
  console.log('thirdExercise end----------------------');
  
  console.log('fourthExercise start----------------------');
  
  function result(num) {
    let sum = 0;
    for(let i = 1; i <= num; i++){
      sum += i;
    }
    return sum;
  }
  console.log("Сумма чисел от 1 до 15 " + " = " + result(15));
  console.log('fourthExercise end----------------------');


  console.log('fifthExercise start----------------------');
  
  let numberFrom15to35 = 15;
  for(let i = 15; i < 35; i++) {
    numberFrom15to35 = numberFrom15to35 * i;
    console.log("Произведение чисел" + " " + numberFrom15to35);
  }
  console.log('fifthExercise end----------------------');
  
  console.log('sixthExercise start----------------------');
  
  let fiveHundred = 500;
  let numberResult = 0;
  for (let i = 1; i <= fiveHundred; i++) {
    numberResult = numberResult + i;
  }
  numberResult = numberResult / fiveHundred;
  
  console.log("Среднее арифметическое " + (fiveHundred + 1) / 2);
  console.log('sixthExercise end----------------------');