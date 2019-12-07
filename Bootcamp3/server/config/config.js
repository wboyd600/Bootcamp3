//This file holds any configuration variables we may need 
//'config.js' is ignored by git to protect sensitive information, such as your database's username and password

module.exports = {
    db: {
      uri: 'mongodb+srv://wesley:pp@mongo-activity-io2xg.mongodb.net/test?retryWrites=true&w=majority'//place the URI of your mongo database here.
    }, 
    openCage: {
      key: '9aca1d8d7c6342b8a7a14090592b1b06' //place your openCage public key here - Sign-up for a free key https://opencagedata.com/
    },
    port: 8080
  };