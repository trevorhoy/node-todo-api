const { MongoClient, ObjectID } = require('mongodb')



MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log(`Unable to connect to database server`);
  }
  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp');

  // db.collection('Todos').deleteMany({ text: 'need to add more todos' }).then((result) => {
  //   console.log(result);
  // });

  // db.collection('Todos').deleteOne({ text: 'testing a delete' }).then((result) => {
  //   console.log(result);
  // })

  // db.collection('Todos').findOneAndDelete({ completed: false }).then((result) => {
  //   console.log(result);
  // })

  db.collection('Users').findOneAndDelete({ _id: new ObjectID('5abed6f6d6453f95ab389aac') }).then((result) => {
    console.log(result);
  })

  // db.close();
});