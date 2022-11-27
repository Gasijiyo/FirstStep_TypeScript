const button = document.querySelector("button")! as HTMLButtonElement;
const input1 = document.getElementById("num1")! as HTMLInputElement;
const input2 = document.getElementById("num2")! as HTMLInputElement;

/**
 * !로 HTML에서 불러오는 객체 정의
 * 함수 내에서 Type 명시 (파라미터 이름: 타입)
 * +를 안 붙이면 문자열(String) 이 되므로 + 를 붙여서 정수로 인식 
 */
function add(num1: number, num2: number) {
    return num1 + num2;
}

button.addEventListener("click", function() {
    console.log(add(+input1.value, +input2.value));
});