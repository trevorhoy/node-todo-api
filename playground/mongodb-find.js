const { MongoClient, ObjectID } = require('mongodb')



MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log(`Unable to connect to database server`);
  }
  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp');

  // db.collection('Todos').find({
  //   _id: new ObjectID('5abed5fb6bd3a9957cec9627')
  // }).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }).catch((err) => {
  //   console.log(err);
  // })

  // db.collection('Todos').find().count().then((count) => {
  //   console.log(`Todos count: ${count}`);
  // }).catch((err) => {
  //   console.log(err);
  // })

  db.collection('Users').find({ name: 'Trevor' }).toArray().then((users) => {
    console.log(`Users: `);
    console.log(JSON.stringify(users, undefined, 2));
  }).catch((err) => {
    console.log(err);
  })

  // db.close();
});