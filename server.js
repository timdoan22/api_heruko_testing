const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

const ebikes = {
    'super73':{
        'model': 's2',
        'batteryRange':'200 miles',
        'topSpeed': '31 miles',
        'country produced': 'US'
    },
    'generic':{
        'model': 'generic',
        'batteryRange':'50 miles',
        'topSpeed': '15 miles',
        'country produced': 'China'
    }
}

app.get('/', (request, response)=>{
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:ebikeName', (request,response)=>{
    const ebike = request.params.ebikeName.toLowerCase()
    if(ebikes[ebike]){
        response.json(ebikes[ebike])
    }else{
        response.json(ebikes.generic)
    }
})

app.listen(process.env.PORT || PORT, ()=>{
    console.log(`The server is running on port ${PORT}! You better go catch it!`)
})