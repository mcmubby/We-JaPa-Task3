const fs = require('fs');
const path = require('path')

function replacer(name, val) {
    if(val === '' || val==='-' || val ==='N/A'){
        return undefined;}
    else {
        return val;
    }
    
};

function arrayCleaner(dClean){
    for (let i = 0; i < dClean.length; i++) {
        if(dClean[i] === '' || dClean[i]==='-' || dClean[i] ==='N/A'){
            dClean.splice(i,1);
            return dClean;
        }
    }
}

cleanData = (pData) => {
    
    arrayCleaner(pData.hobbies);
    fs.writeFile(path.join(__dirname, 'Response.txt'), JSON.stringify(pData, replacer, 2), (err)=>{
        if(err){console.log(err);}
    })
}

module.exports = cleanData;