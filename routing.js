const http=require("node:http");
const server = http.createServer((req,res)=>{
 // res.end(req.url); 
 if(req.url=="/")
 {
    res.writeHead(200,{"Content-Type":"text/plain"});
    res.end("welcome to home page")
    
 } 
 else if (req.url=="/about"){
    res.writeHead(200,{"Content-Type":"text/plain"});
    res.end("welcome to about page")
 }
 else if (req.url=="/contact"){
    res.writeHead(200,{"Content-Type":"text/plain"});
    res.end("welcome to contact page")
 }
 else{
   
        res.writeHead(404,{"Content-Type":"text/plain"});
        res.end("sorry page is not found")
 }
});
const PORT=process.env.PORT || 3000;
server.listen(PORT,()=>{
    console.log("server starts sucessfully");
})
