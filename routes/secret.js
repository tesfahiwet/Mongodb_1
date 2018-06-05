var express = require('express');
var router = express.Router();

/* GET secrete listing. */
router.get('/', function(req, res, next) {
  //res.send('Inside secret');



const MongoClient = require('mongodb').MongoClient;
const crypto = require('crypto');
const decipher = crypto.createDecipher('aes256', 'asaadsaad');

var cipheredmessage;
decrypted = '';

decipher.on('readable', () => {
  const data = decipher.read();
  if (data)
    decrypted += data.toString('utf8');
});

decipher.on('end', () => {
  console.log(decrypted); 
  // Prints: some clear text data
});

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'homework7';

// Use connect method to connect to the server
MongoClient.connect(url, function(err, client) {
  const db = client.db(dbName);
  
  db.collection('cipher').findOne(err, function(err, result){
      if(err) throw err;
      cipheredmessage = result.message;
     // decipher.write(cipheredmessage, 'hex');
     // console.log('my object: ' + decipher.final('hex'));
    //decipher.end();
      var decrypted = decipher.update(cipheredmessage, 'hex', 'utf8');
      decrypted += decipher.final('utf8');
      res.send(decrypted);
      console.log('my text: ' + decrypted);
  });

  client.close();
});


});

module.exports = router;


