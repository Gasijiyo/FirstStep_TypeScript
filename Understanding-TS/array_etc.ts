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

const hobbies = ['Sports','Cooking'];
const activeHobbies = ['Hiking',...hobbies];

/** ... : 전개연산자
 *  전개하고자 하는 배열 또는 객체를 지정 또는 지시
 *  해당 배열 또는 객체의 모든 요소를 꺼내 값의 목록으로 추가
 *  
 */
var resultDot = activeHobbies.push(...hobbies);
console.log("result ... : "+resultDot);
console.log(activeHobbies);

activeHobbies.splice(2,0,'Working');
// splice: (배열index, 삭제할 값 개수, 삭제한 배열에 인덱스에 추가할 값)
// activeHobbies.splice(2,1,'Working');
console.log(activeHobbies);

const aPerson = {
    name: 'Bill',
    age: 29,
};

const copiedAPerson = {...aPerson}; 
// = aPerson 이라고 하면 pointer값만 가져오는 것임 (메모리 주소값)