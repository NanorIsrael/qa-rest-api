'use strict'
import express from 'express';

import router from './routes';

const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true}))

app.use((req, res, next) => {
	const error = new Error('Not Found');
	error.status = 404;
	next(error);
})

app.use((err, req, res, next) => {
	res.status(err.status | 500)
	res.json({ error: err.message})
})
const port = process.env.PORT || 3000;

app.listen(port, () => console.log('Server listening on port ' + port));