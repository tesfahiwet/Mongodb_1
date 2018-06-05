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
      decipher.write(cipheredmessage, 'hex');
     decipher.end();
  });


//   db.collection('cipher').find({}).toArray(function(err, items){
//      console.log(items[0].message);
//     // cipheredmessage = items[0].message;
//     // items.forEach(function(err, item){
//     //     console.log(item);
//     // })
// });

  client.close();
});

