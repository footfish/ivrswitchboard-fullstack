# ivrswitchboard-fullstack
Fullstack deployment container for ivrswitchboard


##Heroku deploy 

Pre-requisites: To deploy full stack to heroku you will need to have a heroku account and the heroku command line installed. 
The following instructions builds the static react client and installs the node express router to serve the api and client. 

### Mongo Db 
Setup mongo db (sandbox)
```
heroku addons:create mongolab 
```
This will automatically create the database and set the required heroku environmental variable MONGODB_URI. 

### Environmental variables 

Two other environmental variables are required;
**REACT_APP_SERVER_URI** - path to the heroku host. This is required for the the client build to locate the API. *heroku info* can be used to find the path. If using bash the below should work to set it automatically. 

```
heroku config:set REACT_APP_SERVER_URI=$(heroku info -s | grep web_url | cut -d= -f2)
```

**JWT_SECRET** - secret used for JWT creation. 

```
heroku config:set JWT_SECRET=anysecrethere 
```

### Build and deploy 
```
git push heroku 
```