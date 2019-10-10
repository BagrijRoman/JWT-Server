# JWT-Server
Node/Express JWT server

## Run guide
### Pre install requirements
node v10.5.0 \
npm  v6.1.0  \
mongodb v3.2

* Clone project
```git clone <ssh or https link>```
* Install dependencies
```npm install```
* Run project
```npm run dev```

All environment variables stored in `.env.development` file. \
To run app on production `.env.production` file should be configured.


todo
- finish refactoring of midlewares
- finish reset password related functionality
- add google auth
- add facebook auth
- add linkedin auth
- add users module or social auth (if it will be necessary)
- add global 404 handler
