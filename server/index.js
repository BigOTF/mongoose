import express from 'express';
import cors from 'cors';
import databaseConnection from './db/connectDB.js';
import todoModel from './model/schema.js';

const app = express();
const URL = process.env.URL || 'mongodb://127.0.0.1:27017/TodoCrud'

app.use(express.json());
app.use(cors());

app.get('/', async(req, res) => {
    const response = await todoModel.find();
    return res.json({todo: response});
})

app.post('/add', async(req, res) => {
    try {
        const newTodo = new todoModel(req.body);
        const addedTodo = await newTodo.save();
        return res.json(addedTodo);
    } catch(err) {
        console.log(err);
    }
})

app.delete('/delete/:id', async(req, res) => {
    try {
        const response = await userModel.findByIdAndDelete(req.params.id);
        return response.json()
    } catch(err) {
        console.log(err);
    }
})


databaseConnection(URL)

app.listen(3000, () => {
    console.log('Server is currently running')
})