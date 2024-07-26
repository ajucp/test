// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler
var name="ajucp"
var name='abc'
console.log("name is:"+name);
let age=25
console.log("age is:"+age);
age=26
console.log("age is:"+age);

const fruit="pineapple"
console.log("fruit is:"+fruit);
let fruits='apple'
console.log(fruits)

//array
let veg=[]
console.log(veg)
veg.push('potato')
console.log(veg)
veg.push('tomato','onion')
console.log(veg)

const color=['red','green']
console.log(color)
//spread oprator
const combo=[...color,...veg]
console.log(combo)

//sliceing the array
const final=combo.slice(2,5)
console.log(final)

//pop or deleting the last element

const poping=combo.pop()
console.log(poping)//for popping elements
console.log(combo)//for remaining elements

//to remove or delete the first element use shift()
const shifting=combo.shift()
console.log(shifting)
console.log(combo)

let obj={
    name:'Aju CP',
    age:25,
    friends:['ameer','gokul'],
    educatio:{
        schooling:['10 the','plustwo'],
        degree:[{
            course:'mca',
            yearofpassing:2023,
        },
        {
            course:'maths',
            yearofpassing:2019
            
        }]
        
    }
};

console.log(JSON.stringify(obj))
console.log(JSON.stringify(obj.educatio.degree))

