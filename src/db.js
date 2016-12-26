import sqlite from 'sqlite';
import config from './config.json';

export default callback => {	
	sqlite.open(config.databaseFileName).then(db => {
		console.log("Database opened successfully.");
		callback(db);
	}).catch(err => {
		console.log("Error opening the database.", err);
	});
}