# Assignment 2 - IVR switchboard full stack (ReactJS App & API)
Name: Kevin Brennan

## Overview.
This a demonstration implementation of an IVR (Interactive Voice Response) switchboard full stack application using React and Node/Express with deployment to Heroku.  
This is a 'wrapper' repository for deployment of full stack to Heroku.  
Git subtree is used to import the separate [client](/footfish/ivrswitchboard-client) and [server](/footfish/ivrswitchboard-server) repositories.  
This readme focuses on Heroko deployment, follow the links below to read more on client or server.  
[Readme for client can be found here.](./client)  
[Readmen for Server can be found here.](/server)  

## Demo 
You can have a quick demo here [https://enigmatic-sea-61714.herokuapp.com/](https://enigmatic-sea-61714.herokuapp.com/)

email: dummy@email.com  
password: dummy  


## Installation requirements & Heroku deployment
The following instructions build the static react client and installs the node express router to serve the api and client. 

### Pre-requisites:
To deploy the full stack you will need to have a [heroku](https://www.heroku.com/) account and the heroku command line installed. 

### Get the code
Clone this repo locally. Then run `npm install` to install all required dependencies

### Mongo Db 
This application requires a mongo database, a free sandbox database is very straightforward to setup on heroku. *Note that heroku will require you to register a credit card to authenticate you *

```
heroku addons:create mongolab 
```
This will automatically create the database and set the required heroku environmental variable MONGODB_URI. 

### Environmental variables 
The application requires 3 environmental variables. 
  - MONGODB_URI: 
  - JWT_SECRET: 
  - REACT_APP_SERVER_URI:  
  
 MONGODB_URI is automatically configured, you will need to set the others from the command line. (*tip: `heroku config` lists variables set)
 
- **REACT_APP_SERVER_URI** - heroku host web url.  This is required for the the client build (so client can locate API). 

*heroku info* can be used to find the host web url. The below command should work to set it automatically on any *nix* cli. 

```
heroku config:set REACT_APP_SERVER_URI=$(heroku info -s | grep web_url | cut -d= -f2)
```

- **JWT_SECRET** - secret string used for java web token generation (auth) on server. 

```
heroku config:set JWT_SECRET=put-any-secret-here 
```

### Run local 
The following will run the full stack on localhost installed with test data (proxying the api).
You will need to make sure your server .env is correctly configured - [see readme for server](/server).  (You may install a local database or use the heroku database MONGODB_URI.) 

Make sure you are in the code root folder (not ./server or ./client) then run;
```
npm run dev 
```

### Build and deploy 
```
git push heroku 
```
