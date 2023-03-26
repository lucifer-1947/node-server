//Using Higher Order and Clouser techniques

//deletes data
const deleteMethod = (shinobis)=>(req,res)=>{
   
    //accessing DATA which is sent using BODY-METHOD
    req.on('data', (dataStream)=>{
        const body =  dataStream.toString();
        const shinobi = JSON.parse(body)

        //adding new data
        shinobis.pop()
    })

    //pipeing the response
    req.pipe(res)

    // res.writeHead(200, "success", { 'Content-Type': 'application/json' })
    // res.end(JSON.stringify(shinobis))
}

export default deleteMethod;