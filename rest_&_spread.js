const toArray=(arg1,arg2,arg3)=>{
    return [arg1,arg2,arg3];
};

console.log(toArray(1,5,6,8));//we cannot find the 4th element in out put so we use rest operator

//rest
const toArray1=(...args)=>{
    return args;
};
console.log(toArray1(1,2,8,9));

//spread operator for functions

const course=['mac','mba','msc ca','msc bd']
console.log(course)
const copiedArray=course.slice();
console.log(copiedArray);
const copiedArray1=[course];
console.log(copiedArray1);

const copiedArray2=[...course];
console.log(copiedArray2)

//spread operator for objects

const student={
    name:'ajmal',
    age:25
};
console.log(student);

const copyiedStud={...student};
console.log(copyiedStud);