const MongoClient = require('mongodb').MongoClient;

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'library';

// Use connect method to connect to the server
MongoClient.connect(url, function(err, client) {

  console.log("Connected successfully to server");

  const db = client.db(dbName);
  //db.collection('book').insert({test:1})

  // db.collection.find({}).toArray(function(err, docs){
  //   console.log(docs[0]);
  // });

  db.collection('book').find({}).toArray(function(err, items){
     console.log(items[1]);
    // items.forEach(function(err, item){
    //     console.log(item);
    // })
});

  client.close();
});


// db.bind('book');

// db.book.findOne({ISBN: '12123'}, function(err, item){
//     db.close();
// });




/*

//var MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://127.0.0.1:27017/library', function(err, db){
    if(err)
        throw err;

        db.book.findOne({}, function(err, doc){
            if(err) throw err;

            console.dir(doc);
            db.close();
        });

        console.dir("called findone");
});

*/