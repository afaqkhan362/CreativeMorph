const harmonyService = require('./service.harmony');
const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();


const app = express();
const port = process.env.PORT;
app.use(express.json());


mongoose.connect(`${process.env.MONGO_CONN_STR}`)
    .then(()=> console.log('MongoDB connected...'))
    .catch(err => console.error('Couldn\'t connect to MongoDB',err));


app.get('/get-tasks', ( request, response ) => {
    harmonyService.getAllTasks(request,response);
} );


app.post('/add-task', ( request, response ) => {
    harmonyService.createTask(request,response);
} );

app.post('/delete-task',( request, response ) => {
    harmonyService.deleteTask(request,response);
} );

app.post('/update-task', ( request, response ) => {
    harmonyService.updateTask(request,response);
} );

app.listen(port, () => console.log(`Listening on Port ${port}`)); 