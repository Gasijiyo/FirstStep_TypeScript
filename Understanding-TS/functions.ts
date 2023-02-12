function add(n1: number, n2:number): number{
    return n1 + n2;
}   // 함수 선언 시 ':'뒤에 오는건 return type

function printResult(num: number): void{  
    console.log('Result: ' + num);
}   // 이 함수의return type은 string이 아닌 void
    // void 또는 any 

function addAndHandle(n1: number, n2: number, cb: (num: number) => void){
    const result = n1 + n2;
    cb(result);
}


printResult(add(4, 12));
// console.log (printResult(add(4, 12))); void라 undefined
// JavaScript에선 undefined는 값(value)이다.

// let combineValues: Function; 타입을 함수로 정의
let combineValues: (a: number, b: number) => number;
// "()"파라미터 타입, "=>" 콜백함수 리턴 타입 정의
combineValues = add;
// combineValues = printResult; 파라미터가 1개인 함수
// combineValues = 5;
console.log (combineValues(8,7));

addAndHandle(10, 20, (result)=>{
    console.log(result);
    // return; return을 해도 컴파일에러가 안 뜬다
    // 이미 void 선언을 해서 모든 반환은 무시되기 때문
});