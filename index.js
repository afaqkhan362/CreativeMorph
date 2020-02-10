const express = require('express');
require('dotenv').config();

const app = express();
const port = process.env.PORT;
app.get('/', (request, response) => {

});

app.listen(port, () => console.log(`Listening on Port ${port}`)); 