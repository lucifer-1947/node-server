import http from 'http'

//non persistant way of storing data - WITHOUT DATABASE
const shinobis = [
    {
        id:0,
        name:'Naruto Uzumaki'
    },
    {
        id:1,
        name:'Sasuke Uchiha'
    }
]

//creating web server
const server = http.createServer((req,res)=>{

    console.log(req)

    
    //customising response
    res.writeHead(200,"success",{ 'Content-Type':'application/json'})

    //adding response data in STANDARD DATA FORMAT - JSON
    //and sending response and ending request call
    res.end(JSON.stringify(shinobis))
})

//activating web server
server.listen(3000,()=>console.log("web server activated and listening at 3000..."))
