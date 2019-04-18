# ivrswitchboard-fullstack
Fullstack deployment container for ivrswitchboard


## Heroku deployment

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

- **REACT_APP_SERVER_URI** - heroku host web url.  This is required for the the client build (so client can locate API). 

*heroku info* can be used to find the host web url. The below command should work to set it automatically on any *nix* cli. 

```
heroku config:set REACT_APP_SERVER_URI=$(heroku info -s | grep web_url | cut -d= -f2)
```

- **JWT_SECRET** - secret string used for JWT generation. 

```
heroku config:set JWT_SECRET=put-any-secret-here 
```

### Build and deploy 
```
git push heroku 
```