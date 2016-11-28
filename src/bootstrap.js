import {createServer} from 'http';
import uuid from 'uuid';

import app from './app';

global.contacts = [
	{id: uuid(), name: 'Ayesha Khanna'},
	{id: uuid(), name: 'Julian'},
	{id: uuid(), name: 'Taimoor'}
];

let bootstrap = function () {
	let server = createServer(app);
	server.listen(80, () => {
		console.log('Server running at http://127.0.0.1:8000');
	});		
}

export default bootstrap;