const button = document.querySelector('button')!;
// '!'는 기본적으로 값이 존재하니 값이 반환될거라고 TS에 알려주는 것
button.addEventListener('click', () => {
    console.log('Clicked!');
});

