//Using Higher Order and Clouser techniques

//gets existing data
const getMethod = (shinobis)=>(req,res)=>{
    
    //accessing PARAMS sent using QUER-STRING-METHOD
    
    const segments = req.url.split('/')

    let requestedShinobis;

    if(segments[1]==='shinobi'){
         requestedShinobis = shinobis.filter( (shinobi)=> shinobi.id=== Number.parseInt(segments[2]))
    }

    res.writeHead(200, "success", { 'Content-Type': 'application/json' })
    res.end(JSON.stringify(requestedShinobis))

}

export default getMethod;