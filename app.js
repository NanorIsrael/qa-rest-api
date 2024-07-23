'use strict'
import express from 'express';
const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true}))


const port = process.env.PORT || 3000;

app.listen(port, () => console.log('Server listening on port ' + port));