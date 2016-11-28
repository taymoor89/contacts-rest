import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import morgan from 'morgan';

import getContacts from './handlers/get-contacts';
import addContact from './handlers/add-contact';
import deleteContact from './handlers/delete-contact';

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(getContacts);		//[GET]		/v1/contacts
app.use(addContact);		//[POST]	/v1/contacts
app.use(deleteContact);		//[DELETE]	/v1/contacts

export default app;