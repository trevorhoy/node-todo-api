const { ObjectID } = require('mongodb');

const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');
const { User } = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//   console.log(result);
// }).catch((e) => {
//   console.log(e);
// });

Todo.findByIdAndRemove('5ac0030ce9dbd75647016a32').then((result) => {
  console.log(result);
});




