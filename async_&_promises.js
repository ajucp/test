const { rejects } = require("assert");
const { resolve } = require("path");

// setTimeout(()=>{
//     console.log("timer is done!");
// },2000);

// console.log('hai');

//creating a function  our own

// const fetchData=callback=>{
//     setTimeout(()=>{
//         callback('Done!');
//     },1500);
// };

//calling the fetchdata

// setTimeout(()=>{
//     fetchData(text=>{
//         console.log(text,"text1:");
//     });
// },1000);

// promises
// const fetchdata1=()=>{
//     const promise=new Promise((resolve,rejects)=>{
//         setTimeout(() => {
//             resolve('done!')
//         }, 100);
        
//     });
//     return promise;//synchronous code so it will call first
// };

// setTimeout(()=>{
//     fetchdata1().then(text=>{
//         console.log(text,"text2:");
//     });
// })  


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


const fetchData = (object, isBoolean=true) => {
    console.log(isBoolean, 'isBoolean')

    if(object){
        if(isBoolean === true){
            return object;
    
        } else if(isBoolean === false ) {
            return null
        }  else if (isBoolean === undefined){
            return 'no argument'
        }
        else {
            return "something went wrong!"
        }
    } else {
        return 'no data'
    }
};

// const data = fetchData(obj, true)
// console.log(data, 'data')


// const data2 = fetchData(obj, false)

// console.log(data2, 'data')


const fetchDataAsync = async (object, isBoolean=true) => {
    console.log(isBoolean, 'isBoolean')


    if(object){
        if(isBoolean === true){
    console.log(object, 'object')

            return object;
    
        } else if(isBoolean === false ) {
            return null
        }  else if (isBoolean === undefined){
            return 'no argument'
        }
        else {
            return "something went wrong!"
        }
    } else {
        return 'no data'
    }
};


const getData = async (obj) => {

    try {
        console.log(obj, 'obj')

        data =  await fetchDataAsync(obj) /// 
        console.log(data, 'data1')
        return data

    } catch(err) {
        console.log(err, 'error')
    }


    //func1 asycn await 
    // func2 async await
    // funct3 
}
// getData(obj)

// setTimeout(()=>{
//     fetchData(obj)
//     .then(data=>{
//         console.log("sample data:", JSON.stringify(data));
//         return data
//     }).
//     catch(err=> {
//         console.log(err, 'Error')
//     })
//     .then(data2=>{
//         console.log('sample data2:', JSON.stringify(data2));
//         return data2;
//     });
// })  

let promise = new Promise( (resolve, reject) => {
    const x = "geeksfor_geeks";
    const y = "geeksfor_geeksee"
    if (x === y) {
        resolve(x);
    } else {
        reject(y);
    }
});

promise.
    then( (x)=> {
        console.log('Success, You are a GEEK', x);
        return x
    }).
    then( (data)=> {
        const modified = data.split('_')[1];
        console.log('modified data', modified);
        return modified
    }).
    then( (mod)=> {
        console.log('modified data in next stage', mod);
    }).
    catch( (err)=> {
        console.log('Some error has occurred', err);
    }); 
