//Using Higher Order and Clouser techniques

//Adds new data
const putMethod = (shinobis) => (req, res) => {

    //accessing DATA which is sent using BODY-METHOD
    req.on('data', (dataStream) => {
        const body = dataStream.toString();
        const updatedShinobi = JSON.parse(body)

        //adding new data
        shinobis.forEach(shinobi => {
            if (shinobi.id === updatedShinobi.id) shinobi.name = updatedShinobi.name
        })

        res.writeHead(200, "success", { 'Content-Type': 'application/json' })
        res.end(JSON.stringify(shinobis))
    })

}

export default putMethod;