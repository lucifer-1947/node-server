import http from 'http'

const server = http.createServer((req,res)=>{
    res.end(JSON.stringify("Hello you request is succesfull"))
})

server.listen(3000,()=>console.log("web server activated and listening at 3000..."))
