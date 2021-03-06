// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');


// db.collection('Todos').findOneAndUpdate({
//   _id: new ObjectID('5c49ed2a8b9ac58aa6798ff2')
// }, {
//   $set: {
//     completed: true
//   }
// }, {
//   returnOriginal: false
// }).then((result) => {
//   console.log(result);
// })

db.collection('Users').findOneAndUpdate({
  _id: new ObjectID("5c48da88b9796b3cb0a0d930")
}, {
  $set: {
    name: "Kevin"
  },
  $inc: {
    age: 1
  }
}, {
  returnOriginal: false
}).then((result) => {
  console.log(result);
})

  // db.close();
});
