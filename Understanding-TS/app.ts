let userInput: unknown; // any와는 다른 타입, 어떤 값이든 저장 가능
let userName: string;

userInput = 5;
userInput = 'Really?';
// userName = userInput; // unknown일땐 오류이나 any일땐 정상
if(typeof userInput ==='string'){
    userName = userInput;
}   // 추가적인 타입검사가 있어야 할당 가능

function generateError(message: string, code: number){
    throw {message: message, errorCode : code};
}   // : never을 설정해 명시적 표현 가능 (반환타입은 같은 void)

generateError('An error Occurred', 505);