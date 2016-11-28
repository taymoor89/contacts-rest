import {Router} from 'express';
import uuid from 'uuid';

const router = Router();

const addContact = (req, res) => {
	let contact = null;
	const {name} = req.body;

	if(name){
		const id = uuid();
		contact = {id, name};
		global.contacts.push(contact);
	}

	res.status(201).json(contact);
}

router.post('/v1/contacts', addContact);

export default router;