// const person: {
//     name: string;
//     age: number;
//     hobbies: string[];
//     role: [number, string];
// } = {
//     name: 'YangSu',
//     age: 30,
//     hobbies:['Sports', 'Cooking'],
//     role: [2, 'author']
// };

// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

enum Role { ADMIN = 100, READ_ONLY = 'author', AUTHOR = 5};
// 첫번째 원소부터 자동으로 0부터 시작하고 순차적으로 1씩 증가
// 임의의 숫자를 원하면 첫 원소의 값을 ADMIN=-5 같은걸로 하면 됨

const person = {
    name: 'Maximilian',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN
};

// person.role.push('admin');
// person.role = [0, 'admin'];
let favoriteActivities: string[];
// let favoriteActivities: any[];  // 혼합 타입 배열
favoriteActivities = ['Sports'];

console.log(person.name);

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
}

if (person.role === Role.AUTHOR) {
    console.log('is admin');
}







/** 
 *  Cannot redeclare block-scoped variable 해결
 *  export {};  //  방법1
 *  방법2 : package.json(또는 tsconfig.json)에 아래 추가
 *  "compilerOptions": {  
 *  "lib" : [ "ES2015"]
 *  }
 * 
 * */ 