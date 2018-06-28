const {MongoClient, ObjectId} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/ToDoApp', (err, db) => {
  err ? console.log('unable to connect to MongoDB server') : console.log('connected to server')

  db.collection('Todos').find({
    completed: false
  }).toArray().then((docs) => {
    err ? console.log('unable to fetch to todos') : console.log('Todos: \n', JSON.stringify(docs, undefined, 2))
  })

  db.collection('Todos').find().count().then((count) => {
    err ? console.log('unable to fetch to todos') : console.log(`Todos count: ${count}`)
  })

  db.collection('Users').find({
    name: "Daniel"
  }).toArray().then((docs) => {
    err ? console.log('unable to fetch to users') : console.log('Users: \n', JSON.stringify(docs, undefined, 2))
  })

  db.collection('Users').find().count().then((count) => {
    err ? console.log('unable to fetch to todos') : console.log(`Users count: ${count}`)
  })
})
