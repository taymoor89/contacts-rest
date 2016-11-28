import {Router} from 'express';

const router = Router();

const getContacts = (req, res) => {
	res.status(200).json(global.contacts);
}

router.get('/v1/contacts', getContacts);

export default router; 