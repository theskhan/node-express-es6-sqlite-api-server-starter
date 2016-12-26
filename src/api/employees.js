'use strict'
require('babel-polyfill');

import { Router } from 'express';

export default ({ config, db }) => {
	let api = Router();
	
	let wrap = fn => (...args) => fn(...args).catch(args[2])

	api.get('/', wrap(async (req, res) => {
		const employees = await db.all("SELECT * FROM EMPLOYEES");
		res.json(employees);
	}));

	return api;
}