import {Router} from 'express';
import _ from 'lodash';

const router = Router();

const deleteContact = (req, res) => {
	const {contactId} = req.params;

	_.remove(global.contacts, (contact) => {
		return contact.id === contactId;
	});

	res.status(204).send();
}

router.delete('/v1/contacts/:contactId', deleteContact);

export default router;