const person={
    name:'aju CP',
    age:25
};

console.log(person);

const person1={
    name:'Aju cp',
    age:25,
    greetings(){
        console.log("hai i am "+this.name)
    }
};


const person2={
    name:'AJMAL CP',
    age:25,
    greetings: function(){
        console.log("hai i am "+this.name+",my age is :"+this.age);
    }
}
const person3={
    name:'AJMAL CP',
    age:25,
    greet:()=>{
        console.log("hai i am "+this.name)
    }
}   
person1.greetings()
person2.greetings()
person3.greet()