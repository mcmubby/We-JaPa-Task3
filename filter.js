const fs = require('fs');
const path = require('path')

function replacer(name, val) {
    if(val === '' || val==='-' || val ==='N/A'){
        return undefined;}
    else {
        return val;
    }
    
};

cleanData = (pData) => {
    
    fs.writeFile(path.join(__dirname, 'Response.txt'), JSON.stringify(pData, replacer, 2), (err)=>{
        if(err){console.log(err);}
    })
}

module.exports = cleanData;