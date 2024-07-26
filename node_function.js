const name='Aju CP';
let Age=25;
var hasHobbies=true;
// name='aju';
Age=30;


// function SummarizeUser(UserName,UserAge,UserhasHobbies){
//     return(
//         'Name is: '+UserName+
//         ', age is '+UserAge+
//         ' has hobbies '+UserhasHobbies
//     );
// }
// used for calling the funtion in a asynchronisly
// const SummarizeUser = function(UserName,UserAge,UserhasHobbies){
//     return(
//         'Name is: '+UserName+
//         ', age is '+UserAge+
//         ' has hobbies '+UserhasHobbies
//     );
// }

// using arrow
const SummarizeUser=(UserName,UserAge,UserhasHobbies)=>{
    return(
        "name is: "+UserName+ ", Age is "+UserAge+" has a hobby "+UserhasHobbies
    );

};

const sub=(a,b)=>{
    return a-b
}
const add=(a,b)=>a+b

const addone=a=>a+1
const noargmnt=()=>1+2

console.log(addone(3))
console.log(add(5,6))
console.log(sub(5,6))
console.log(noargmnt())

console.log(SummarizeUser(name,Age,hasHobbies));