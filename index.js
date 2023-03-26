import http from 'http'
import deleteMethod from './controllers/deleteMethod.js'
import getMethod from './controllers/getMethod.js'
import postMethod from './controllers/postMethod.js'
import putMethod from './controllers/putMethod.js'

//non persistant way of storing data - WITHOUT DATABASE
const shinobis = [
    {
        id: 0,
        name: 'Naruto Uzumaki'
    },
    {
        id: 1,
        name: 'Sasuke Uchiha'
    }
]

//creating web server
const server = http.createServer((req, res) => {
    
    
    //Creating API endpoints
    //URL Routing using js conditional programming
    switch (req.method) {
        case 'GET': getMethod(shinobis)(req, res); break
        case 'POST': postMethod(shinobis)(req,res); break
        case 'PUT': putMethod(shinobis)(req,res);  break
        case 'DELETE': deleteMethod(shinobis)(req,res); break
        default:
            //customising response
            res.writeHead(200, "success", { 'Content-Type': 'application/json' })

            //adding response data in STANDARD DATA FORMAT - JSON
            //and sending response and ending request call
            res.end(JSON.stringify(shinobis))
    }

})

//activating web server
server.listen(3000, () => console.log("web server activated and listening at 3000..."))
