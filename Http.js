// & creating a server

// const http = require('http');

// let server = http.createServer((req,res)=>
// {
//     console.log("iam node server");
//     console.log(req);
//     res.write("<h1>hii am sahana</h1>")
// })
// server.listen(5800,(err)=>{

//     if(err)
//     throw Error(err)
//     console.log("server running at portol 5800");

// })

//& creating an API in node
const http = require('http');
let student = [{id:1, name:"sahana"},{id:2, name:"BM"}] 

let server= http.createServer((req,res)=>{

    res.writeHead(201,{"content-type":"application/json"})
    res.write("<h1>Home page</h1>")
    res.end(JSON.stringify(student))

})
server.listen(4800,(err)=>{

    if(err)
    throw Error(err)
    console.log("server running at 4800 portal");
})