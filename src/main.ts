import * as dotenv from 'dotenv';
dotenv.config();

import { default as express, Express } from 'express';
import { default as cors } from 'cors';

let app = express();
app.use(cors({ optionsSuccessStatus: 200 }));
app.set('trust proxy', 'loopback');

app.get('/', (req, res) => {
	res.send('API: /api/whoami');
});

app.get('/api/whoami', (req, res) => {
	return res.json({
		ipaddress: req.ip,
		language: req.headers['accept-language'],
		software: req.headers['user-agent']
	});
});

app.listen(process.env.PORT || 3000, () => {
	console.log('Ready, listening on port ' + (process.env.PORT || 3000));
});