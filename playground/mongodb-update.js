const { MongoClient, ObjectID } = require('mongodb')



MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log(`Unable to connect to database server`);
  }
  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp');

  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('5abed8c23ed9a9593ee7905b')
  // }, {
  //     $set: {
  //       completed: false
  //     }
  //   }, { returnOriginal: false }).then((result) => {
  //     console.log(result);
  //   })

  db.collection('Users').findOneAndUpdate({
    name: 'Mikey'
  }, {
      $set: { name: 'Trevor' },
      $inc: { age: 1 }
    }, {
      returnOriginal: false
    }).then((result) => {
      console.log(result);
    })
  // db.close();
});