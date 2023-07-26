// 기본 값 설정 시 맨 앞인자 말고 뒤 인자부터 설정해야 함.
const add1 = (a: number , b:number=1) => a+b;
// const add1 = (a: number =1, b:number) => a+b;
const printOutput : (a: number|string) => void = output => console.log(output);

const button = document.querySelector('button')!;
// '!'는 기본적으로 값이 존재하니 값이 반환될거라고 TS에 알려주는 것
// button.addEventListener('click', () => {
//     console.log('Clicked!');
// });

if(button){
    button.addEventListener('click', event => console.log(event)); 
}

printOutput(add1(5));

