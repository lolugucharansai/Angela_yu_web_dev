const fs = require('fs');
fs.writeFile('message.txt'," hello i am baymax",function(err){
    if(err){
        throw err;
    }

})

fs.readFile('message.txt', 'utf8', function(err, data) {
    if (err) {
        throw err;
    }
    console.log(data);
});

