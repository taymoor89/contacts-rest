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
	server.listen(process.env.PORT || 8888, () => {
		console.log('Server running.');
	});		
};

export default bootstrap;