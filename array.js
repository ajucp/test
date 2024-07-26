const { type } = require("os");

const hobbies=['sports','gym','cooking','traveling'];
//for loop

for (let hobby of hobbies){
    console.log(hobby);
};

const arr=[1,2.3,'ajucp',true];
const name='ajucp'

console.log(hobbies);
console.log(arr);
console.log(arr[2]);
console.log(typeof(name));
console.log(typeof(arr[1]));
console.log(typeof(arr))

//using mapping

console.log(hobbies.map(hobby=>{
    return "Hobby :"+hobby
}));

//another method

console.log(hobbies.map(hobby=>'Hobbys:'+hobby));

//push method to edit the array or to add an element

hobbies.push('dancing');
console.log(hobbies);

