const https = require('https');
const filter = require('./filter');


https.get('https://coderbyte.com/api/challenges/json/json-cleaning', (res) => {
    const statusCode = res.statusCode;
    const header = res.headers;

    //Validate response 
    let error;
    if (statusCode !== 200) {
        error = new Error(`Invalid response.\n Received status code ${statusCode} instead of 200`)        
    }else if(!/^application\/json/.test(header["content-type"])){
        error = new Error(`Invalid content type.\n Expected application/json but received ${header["content-type"]}`)
    }

    //log error if any
    if(error){
        console.error(error.message);
        res.resume();
        return;
    }

    //handle response 
    res.setEncoding('utf8')
    let rawData='';
    res.on('data', (chunk) => {rawData += chunk;});
    res.on('end', () => {
        try {
            const parsedData = JSON.parse(rawData);
            filter(parsedData);
        } catch (e) {
            console.error(e.message);
        }
    })
}).on('error', (e) =>{
    console.error(`Oops: ${e.message}`)
});