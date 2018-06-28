const {MongoClient, ObjectId} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/ToDoApp', (err, db) => {
  err ? console.log('unable to connect to MongoDB server') : console.log('connected to server')

  db.collection('Todos').insertOne({
    text: 'Walk the dog',
    completed: false
  }, (err, res) => {
    err ? console.log('unable to connect insert Todo') : console.log(JSON.stringify(res.ops, undefined, 2))
  })

  // db.collection('Users').insertOne({
  //   name: "Bill",
  //   age: 54,
  //   location: "Durham"
  // }, (err, res) => {
  //   err ? console.log('unable to insert user object') : console.log(JSON.stringify(res.ops[0]._id.getTimestamp(), undefined, 2))
  // })

  db.close();
})
