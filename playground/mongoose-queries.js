const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '5c509b6b4df98bfc320b404111';
//
//  if (!ObjectID.isValid(id)) {
//    console.log('ID not valid');
//  }

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//   if (!todo) {
//     return console.log('Id not found.');
//   }
//   console.log('Todo By Id', todo);
// }).catch((e) => console.log(e));
var id = '5c4b52968a78f48404ae939f';

User.findById(id).then((user) => {
  if (!user) {
    return console.log('User not found.');
  }
  console.log('Todo By User', user);
}).catch((e) => console.log(e));
