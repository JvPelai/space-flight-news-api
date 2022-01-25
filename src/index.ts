import 'reflect-metadata';
import { createConnection } from 'typeorm';
import axios from 'axios';
import * as express from 'express';
import * as bodyParser from 'body-parser';

createConnection()
	.then(async (connection) => {
		// create express app
		const app = express();
		app.use(bodyParser.json());

		app.listen(3000);

		console.log(
			'Express server has started on port 3000. Open http://localhost:3000/ to see results'
		);
		const url = process.env.API_URL;
		const { data } = await axios.get(url + '/count');
		console.log(data, Math.round(data / 10));
	})
	.catch((error) => console.log(error));
