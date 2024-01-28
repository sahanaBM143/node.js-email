

// let a =40
//  let b=60

//  !& passing an object

// module.exports = {sname:"jhon",age:23}
// module.exports .sname= {sname:"jhon",age:23}


// !&  passing data in functions
// let a=6
// let b=7
// function isGreater(){
//     if(a>b){
//         return "A is greater"
//     }
//     else{
//         return "B is greater"
//     }
// }
// module.exports=isGreater


// & CORE MODULES:modules provided by node
// ? fs modules:asynchronous

const fs = require('fs')
// fs.writeFile("./Syllabus.txt","hello backend", (err)=>{

// fs.appendFile("./Syllabus.txt","and front end", (err)=>{  

// fs.readFile("./demo.txt",(err,data)=>{

//     if(err){
//         console.log(err.message)
//     }
//     else{
//         console.log("data read succesfully")
//     }
// })


// & read and write the data
// fs.readFile("./demo.txt",(err,data)=>{

//     if(err){
//         throw Error(err)
//     }
//     else{

//         fs.writeFile("./Syllabus.txt", data,(err)=>
//         {
//             if(err){

//                 throw newError(err)
//             }
//             else{
//                 console.log("data readed from demo and written in syllabus");

//             }

//         })
//     }
// })

// & mkdir
// fs.mkdir("./public", (err) => {
//     if (err) {

//         throw newError(err)
//     }
//     else {
//         console.log("created a folder");

//     }

// })
       
// & rmdir
// fs.rmdir("./public", (err) => {
//     if (err) {

//         throw Error(err)
//     }
//     else {
//         console.log("removed a folder");

//     }

// })


//& fs.rename

// fs.rename("./Syllabus.txt","./newdemo.txt", (err) => {
//         if (err) {
    
//             throw Error(err)
//         }
//         else {
//             console.log("renamed a file is succesfull");
    
//         }
    
//     })

// & fs.stat
// fs.stat("./Syllabus.txt",(err,stat) => {
//     if (err) {

//         throw Error(err)
//     }
//     else {
//         console.log(stat);

//     }

// })

// 


