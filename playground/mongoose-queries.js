const { ObjectID } = require('mongodb');

const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');
const { User } = require('./../server/models/user');

// let id = '5abfee5293993ca90aa4587811';

// if (!ObjectID.isValid(id)) {
//   console.log('Obeject ID is not valid')
// };

// Todo.find({ _id: id }).then((todos) => {
//   console.log('Todos', todos);
// });

// Todo.findOne({ text: 'First test todo' }).then((todo) => {
//   console.log('One todo', todo);
// });

// Todo.findById(id).then((todo) => {
//   if (!todo) {
//     return console.log('id not found');
//   }
//   console.log('Todo ID', todo);
// }).catch((e) => {
//   console.log(e);
// });

let userId = '5abeefeebdd4b89d79a268b1';

User.findById(userId).then((user) => {
  if (!user) {
    return console.log('Could not find user');
  }
  console.log('User', user);
}).catch((e) => {
  console.log(e);
});



