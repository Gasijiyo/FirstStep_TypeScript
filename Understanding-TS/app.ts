const person = {
    name: 'YangSu',
    age: 30,
    hobbies:['Sports', 'Cooking']
};

let favoriteActivities: string[];
// let favoriteActivities: any[];  // 혼합 타입 배열
favoriteActivities = ['Sports'];

console.log(person.name);

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
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