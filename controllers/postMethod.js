//Using Higher Order and Clouser techniques

//Adds new data
const postMethod = (shinobis)=>(req,res)=>{
   
    //accessing DATA which is sent using BODY-METHOD
    req.on('data', (dataStream)=>{
        const body =  dataStream.toString();
        const shinobi = JSON.parse(body)

        //adding new data
        shinobis.push(shinobi)
    })

    //pipeing the response
    req.pipe(res)

    // res.writeHead(200, "success", { 'Content-Type': 'application/json' })
    // res.end(JSON.stringify(shinobis))
}

export default postMethod;