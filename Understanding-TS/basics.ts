function add(n1, n2: number, showResult: boolean, phrase: string){
    // if(typeof n1 === 'number' && typeof n2 === 'number'){
    //     throw new Error('Incorrect Input!');
    // }
    const result = n1 + n2  // 문자열 + 정수 >> 문자열로 인식 그래서 미리 계산
    if (showResult){
        console.log(phrase + result);
    } else {
        return result;
    }   
}

let number1: number;
number1 = 5;
const number2 = 2.8;
const printResult = true;
let resultPhrase = 'Result is: ';


add(number1, number2, printResult, resultPhrase);