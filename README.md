# contacts-rest

RESTful APIs for [react-native-contacts-app](https://github.com/taymoor89/react-native-contacts-app)

##How To Run?

```
git clone https://github.com/taymoor89/contacts-rest.git
cd contacts-rest
npm install
npm start
```

Note: Use [yarn](https://yarnpkg.com/en/docs/install) instead of `npm` for better performance and dependency management of your node packages. 

##Endpoints

To List Contacts

[GET] `/v1/contacts`

To Add New Contact

[POST] `/v1/contacts`

To Delete Existing Contact

[DELETE] `/v1/contacts/:contactId`

##Tools and Technologies

- Node
- Express
- ES6
- Babel
- Lodash