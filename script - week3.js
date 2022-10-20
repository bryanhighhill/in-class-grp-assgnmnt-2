console.log("what's up");
            //('what"s up');
            //('what\'s up');

// Functions - blocks of logic we want to run repeatedly
// a way to reuse code

// function declaration - can appear anywhere in the file, and can be called anywhere in the file
// function doubleIt(numberParam){
  //  console.log(numberParam);
    // return numberParam * 2;
//}

// function doubleIt(numberParam) {
  //  let value = numberparam * 2;
    // console.log(value);
    // return value;
// }
// doubleIt(2);

// Function expression - has to be defined before it is used
// let doubleItExpression = function(numberParam) {
//   return numberParam * 2;
// }
// doubleItExpression(2);

// numberParam = argument, parameter

function addIt(number1, number2) {
    return number1 + number2;
    }

    let answer = addIt(13, 27);
    console.log(answer);
    console.log(addIt(13, 27));

    console.log(addIt(40, 9));
    console.log(addIt(1985, 2022));

function division(firstNumber, secondNumber) {
    return firstNumber / secondNumber;
    }

    let divisionAnswer = division(5762028, 2);
    console.log(divisionAnswer);

    function pizzaIt(topping1, topping2, topping3){
      for(let i=0; i < 10; i++){
        console.log('hi');
        if(i == 5){
        // return "you're outta here";
          console.log('whoa!! a 5!');
      }
    }
      return `a delicious pizza with ${topping1} and ${topping2} and ${topping3}. mm mm mm.`
    }
    console.log(pizzaIt('pepperoni', 'pineapple'));

    //Built in Functions
    // Number(); turns something into a number
console.log(Number('123'));
// 123 === Number('123');

// parseFloat(); - parse string into number
parseFloat();

function circumference(stringParak){
  return parseFloat(stringParam) *2;
  }
  console.log(circumference('4.456748 dollars'));

  //parseInt(); returns integers not just whole numbers like number();

  // toString(); converts number to a string 