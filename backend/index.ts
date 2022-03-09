import express from 'express';
import bodyParser from 'body-parser';
import { env } from 'process';
import DatabaseManager from './managers/DatabaseManager.manager';
import ScoringManager from './managers/ScoringManager.manager';
import helmet from 'helmet';

const basicRoutes = require('./routes/routes');
require('dotenv').config();

export default class Server {

	app: express.Application;

	db = DatabaseManager.instance

	private port = process.env.PORT || 4242;

	private host = process.env.HOST || "localhost";

	constructor() {
		console.log("Server constructed");
	}


	/**
	 * Starts the server
	 */
	start() {
		console.log("Server started");
		this.app = express();
		this.app.use(bodyParser.json());
		// Add headers before the routes are defined
		this.app.use(function (req, res, next) {
			res.setHeader('Access-Control-Allow-Origin', '*');
			res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
			res.setHeader('Access-Control-Allow-Headers', '*');
			next();
		});
		this.initializeRoutes();
		this.listen()
	}

	/**
	 * Loads the routes
	 */
	private initializeRoutes() {
		this.app.use("/", basicRoutes);
		this.app.use((err, req, res, next) => {
			console.error(err.stack)
			res.status(500).send('Request misconfiguration')
		})
	}


	private listen() {
		this.app.listen(this.port, this.host, () => {
			console.log("Server listening on port " + this.port);
		});
		this.db.databaseReady.subscribe(async (connectionSuccess) => {
			if (connectionSuccess) {
				console.log('Database connected');
			}
		});
	}
}

let server = new Server()
server.start()