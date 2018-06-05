// var mc = require('mongodb').MongoClient

// mc.connect('mongodb://localhost:27017/', function(err, db) {
//   if (err) return console.log(err);
//   console.dir(db.collection('test'));
//   // var collection = db.collection('foods')
//   // collection.insert({name: 'taco', tasty: true}, function(err, result) {
//   //   collection.find({name: 'taco'}).toArray(function(err, docs) {
//   //     console.log(docs[0])
//   //     db.close()
//   //   })
//   // })
// })

const MongoClient = require('mongodb').MongoClient;


// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'testdb';

// Use connect method to connect to the server
MongoClient.connect(url, function(err, client) {

  console.log("Connected successfully to server");

  const db = client.db(dbName);
  db.collection('test').insert({test:1})

  // db.collection.find({}).toArray(function(err, docs){
  //   console.log(docs[0]);
  // });

  db.collection('test').find({}).toArray(function(err, items){
    console.log(items[0]);
});

  client.close();
});