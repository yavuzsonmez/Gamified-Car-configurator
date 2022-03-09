import mongoose from 'mongoose';
import { env } from 'process';
import { Observable } from 'rxjs';
require('dotenv').config();
/**
 * Establishes connection to the database and handles errors
 */
export default class DatabaseManager {
	// Shared Instance
	static instance = DatabaseManager.getInstance();

	public static getInstance(): DatabaseManager {
		if (!DatabaseManager.instance) {
			DatabaseManager.instance = new DatabaseManager();
		}

		return DatabaseManager.instance;
	}

	// The path to the database (database)
	private path = process.env.DATABASE_PATH || 'mongodb://localhost:27017/database';

	// The connection instance
	private db = mongoose.connection;

	// Flag to determine if db is ready
	ready: boolean = false;

	// Flag to determine if db is ready
	error: boolean = false;

	// Error Message
	errorMessage?: string;

	// Connection to the database
	connection?: mongoose.Connection;

	/**
	 * Initial call, construct new instance of DatabaseManager
	 */
	constructor() {
		// eslint-disable-next-line global-require
		require('dotenv').config();
		this.loadPathForDatabase();
	}

	/**
	 * Load database path from env file
	 */
	loadPathForDatabase() {
		// The path to fallback if no value is being provided.
		const fallbackPath = 'mongodb://localhost:27017/database2';
		this.path = fallbackPath;
		const readPath = process.env.DATABASE_PATH;
		if (readPath) {
			this.path = readPath;
		}
	}

	// Event to notify server when connection status changes
	statusObservable = new Observable((subscriber) => {
		// Try to connect and catch when fail

		mongoose.connect(this.path).catch(
			// eslint-disable-next-line no-return-assign
			(error) => DatabaseManager.instance.errorMessage = error,
		);

		this.db.once('open', () => {
			this.ready = true;
			this.connection = this.db;
			this.error = false;
			subscriber.next(true);
		});

		this.db.on('error', (e) => {
			this.ready = false;
			this.error = true;
			subscriber.next(false);
		});

		this.db.on('disconnected', () => {
			this.ready = false;
			this.error = true;
			subscriber.next(false);
		});

		this.db.on('connected', () => {
			this.ready = true;
			this.error = false;
			this.connection = this.db;
			subscriber.next(true);
		});
	});

	// Event to notify server when ready
	databaseReady = new Observable((subscriber) => {
		// Try to connect and catch when fail
		mongoose.connect(this.path).catch(
			// eslint-disable-next-line no-return-assign
			(error) => DatabaseManager.instance.errorMessage = error,
		);

		this.db.once('open', () => {
			this.ready = true;
			this.connection = this.db;
			this.error = false;
			subscriber.next(true);
		});

		this.db.on('error', () => {
			this.ready = false;
			this.error = true;
			subscriber.next(false);
		});
	});
}
