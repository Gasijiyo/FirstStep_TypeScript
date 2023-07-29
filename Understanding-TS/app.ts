// const add3 = (a,b,c,d) => {};
// 위와 같이 하면 4개의 인자만 받을 수 있다.
// 이걸 여러개수의 인자를 입력해도 되게 끔 하려면 아래와 같이 선언
// (...임의의 이름 : 인자타입)
const add3 = (...numbers: number[]) => {
    return numbers.reduce((curResult, curValue)=>{
        return curResult + curValue;
    }, 0);
};

const addedNumbers = add3(5, 10, 2, 3.7);
console.log(addedNumbers);