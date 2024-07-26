const person={
    name:'ajmal',
    age:25
}
//normal method

const printName=(PersonData)=>{
    console.log(PersonData.name);
}

printName(person);

//destructors

const printName1=({name})=>{
    console.log(name);
}
printName1(person);

//to print 2 data
const printName2=({name,age})=>{
    console.log(name,age);
}
printName2(person);

//outside the function

const {name,age}=person; //for objects
console.log(name,age);


const hobbies=['sports','gym','cooking','traveling']; //arrays
const [hoby1,hoby2,hoby3]=hobbies;
console.log(hoby1,hoby2,hoby3);