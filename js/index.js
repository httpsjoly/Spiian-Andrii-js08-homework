document.write("First exercise")
let firstResult = [];
let secondResult = [];
for (let i = 10; i <= 20; i++) {
  firstResult.push(i);
  secondResult.push(i * i);
}
document.write(firstResult.join(','));


document.write("Second exercise")
for(let i = 10; i < 21; i++) {
  document.write("КВАДРАТ " + i + " = " + i * i);
}

document.write("Trird exercise")
let thirdExercise = '';
  for(let i = 1; i <= 7; i++) {
    for(let j = 1; j <= 7; j++) {
      thirdExercise = (i * j) + ' ';
    }
    document.write(thirdExercise);
  }
  

document.write("Fourth exercise")
  function result(num) {
    let sum = 0;
    for(let i = 1; i <= num; i++){
      sum += i;
    }
    return sum;
  }
  document.write("Сумма чисел от 1 до 15 " + " = " + result(15));

document.write("Fifth exercise")
  let numberFrom15to35 = 15;
  for(let i = 15; i < 35; i++) {
    numberFrom15to35 = numberFrom15to35 * i;
    document.write("Произведение чисел" + " " + numberFrom15to35);
  }

document.write("Sixth exercise")
  let fiveHundred = 500;
  let numberResult = 0;
  for (let i = 1; i <= fiveHundred; i++) {
    numberResult = numberResult + i;
  }
  numberResult = numberResult / fiveHundred;
  document.write("Среднее арифметическое " + (fiveHundred + 1) / 2);
 
  document.write("Seventh exercise")
    for (let i = 1; i <= 10; i++) {
      for (let j = 1; j <= 10; j++) {
        multi += (i * j) + " ";       
      }
      document.write(multi);
    } 
