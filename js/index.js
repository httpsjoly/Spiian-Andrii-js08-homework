document.write("<b>First exercise:</b> ");
let firstResult = [];
let secondResult = [];
for (let i = 10; i < 21; i++) {
  firstResult.push(i);
  secondResult.push(i * i);
}
document.write(firstResult.join(', '), '</br>');
document.write("<b>Second exercise</b> " + secondResult.join(', '),'</br>');


document.write("<b>Trird exercise:</b> ");
let thirdResult = [];
  for(let tab7 = 1; tab7 < 11; tab7++) {
    thirdResult.push(`7 * ${tab7} = ${7 * tab7}`);
  }
  document.write(thirdResult.join(', '), '</br>');

document.write("<b>Fourth exercise:</b> ");
  let fourthResult = [];
  let sum = 0;
  for(let i = 1; i < 16; i++) {
    fourthResult.push(i);
    sum +=i;
  }
document.write(`${fourthResult.join(' + ')} = ${sum} </br>`);


document.write("<b>Fifth exercise:</b> ");
  let fifthResult = [];
  let numberFrom15to35 = 1;
  for(let i = 15; i < 36; i++) {
    fifthResult.push(i);
    numberFrom15to35 *= i;
    }
    document.write(`${fifthResult.join(' * ')} = ${numberFrom15to35} </br>`);
  

document.write("<b>Sixth exercise:</b> ");
  let sixthResult = [];
  let average = 0;
  for(let i = 1; i < 501; i++){
    sixthResult.push(i);
    average += i;
  }
  document.write(`${sixthResult.join(' + ')} / ${sixthResult.length} = <b>${average/sixthResult.length}</b> </br>`);


  document.write("<b>Seventh exercise:</b> ");
  let seventhResult = [];
  let doubleNumber = 0;
  for(let i = 15; i < 41; i++) {
    seventhResult.push(i*2);
    doubleNumber += i*2;
  }
  document.write(`${seventhResult.join(' + ')} = ${doubleNumber} </br>`);

  document.write("<b>Eighth exercise:</b> ");
  let eighthResult = [];
  for(let i = 34; i < 67; i++){
    eighthResult.push(i*3);
  }
document.write(eighthResult.join(', ' ), '</br>');

document.write("<b>Nineth exercise:</b> </br>");
  let ninethResult = [];
  let random = Math.floor(Math.random() * 500);
  for(let i = 2; i < random; i++) {
    if(random % i == 0)(ninethResult.push(i))
  }


  let tenthResult = [];
  for(let j = 0; j < ninethResult.length; j++) {
    if(ninethResult[j] % 2 == 0){tenthResult.push(ninethResult[j])}
  }

  document.write(`<b>Divisors of a number</b> ${random}: [${ninethResult.join(', ')}] </br>`)
  document.write(`<b>Even divisors is</b> ${tenthResult.length} of a number ${random}. [${tenthResult.join(', ')}] </br>`)

  let sumEvenDivisors = 0;
  for(let k = 0; k < tenthResult.length; k++) {
    sumEvenDivisors += tenthResult[k];
  }

  document.write(`<b>Sum of even divisors</b> ${sumEvenDivisors} of a number ${random}. [${tenthResult.join(', ')}] </br>`)


  document.write("<b>Twelfth exercise:</b> ")
  let twelfeResult = [];
  for()
    
    
    
    //forth exercise
    // function result(num) {
      //   let sum = 0;
    //   for(let i = 1; i <= num; i++){
      //     sum += i;
      //   }
      //   return sum;
    // }
    // document.write(result(15));



    // document.write("Sixth exercise")
    //   let fiveHundred = 500;
    //   let numberResult = 0;
  //   for (let i = 1; i <= fiveHundred; i++) {
    //     numberResult = numberResult + i;
  //   }
  //   numberResult = numberResult / fiveHundred;
  //   document.write("Среднее арифметическое " + (fiveHundred + 1) / 2);