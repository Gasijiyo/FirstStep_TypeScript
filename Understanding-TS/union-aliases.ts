type Combinable = number | string ;
type ConversionDescriptor = 'as-number' | 'as-text';
// type User = {name: string; age: number};

function combine (
    input1: Combinable,
    input2: Combinable,
    resultConversion: ConversionDescriptor) {
  let result;
  if (typeof input1 === 'number' && typeof input2 === 'number'
        || resultConversion === 'as-number') {
    result = +input1 + +input2; // '+'를 앞에 붙이면 number가 타입이 된다
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;

//   if(resultConversion === 'as-number'){
//     return parseFloat(result);
//   } else {
//     return result.toString();
//   }  
}

const combinedAges = combine(30, 26, 'as-number');
console.log(combinedAges);

const combinedStringAges = combine('30', '26', 'as-number');
console.log(combinedStringAges);

const combinedNames = combine("Max", "Anna", 'as-text');
console.log(combinedNames);
