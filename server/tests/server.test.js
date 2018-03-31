const request = require('supertest');
const expect = require('expect');
const { ObjectID } = require('mongodb');

const { app } = require('./../server');
const { Todo } = require('./../models/todo');

const dummyTodos = [{ text: 'First test todo', _id: new ObjectID() }, { text: 'Second test todo', _id: new ObjectID() }];

beforeEach((done) => {
  Todo.remove({}).then(() => {
    return Todo.insertMany(dummyTodos);
  }).then(() => done());
});

describe('POST /todos', () => {
  it('should create a new todo', (done) => {
    let text = 'Test todo text';

    request(app)
      .post('/todos')
      .send({ text })
      .expect(200)
      .expect((res) => {
        expect(res.body.text).toBe(text);
      })
      .end((err, res) => {
        if (err) {
          return done(err);
        }

        Todo.find({ text }).then((todos) => {
          expect(todos.length).toBe(1);
          expect(todos[0].text).toBe(text);
          done();
        }).catch((e) => {
          done(e);
        });
      });
  });

  it('should not create new todo with invalid body data', (done) => {
    request(app)
      .post('/todos')
      .send({})
      .expect(400)
      .end((err, res) => {
        if (err) {
          return done(err);
        }

        Todo.find().then((todos) => {
          expect(todos.length).toBe(2);
          done();
        }).catch((e) => done(e));
      });
  });
});

describe('GET /todos', () => {
  it('should fetch all todos', (done) => {
    request(app)
      .get('/todos')
      .expect(200)
      .end(done);
  });
});

describe('GET /todos:id', () => {
  it('should fetch todo by id', (done) => {

    request(app)
      .get(`/todos/${dummyTodos[0]._id.toHexString()}`)
      .expect(200)
      .expect((res) => {
        expect(res.body.todo.text).toBe(dummyTodos[0].text)
      })
      .end(done);
  });

  it('should return a 404 if todo not found', (done) => {

    request(app)
      .get(`/todos/${new ObjectID().toHexString()}`)
      .expect(404)
      .end(done)
  });

  it('should return 404 for non-object ids', (done) => {
    request(app)
      .get('/todos/1234')
      .expect(404)
      .end(done)
  });
});