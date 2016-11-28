var express = require('express');
var request = require("request");

var router = express.Router();

var sessionsTimeTable = [];


// sessionsTimeTable = [
//   {
//     "time": "10:10",
//     "title": "IBM SW"
//   },
//   {
//     "time": "11:10",
//     "title": "IBM HW"
//   }
// ];


router.get('/', function (req, res) {

/**************************************************************
* API call to API Connect running on Bluemix
* SNIPPET FROM  - IBM API CONNECT Portal -
* Start
**************************************************************


  var options = {
  method: 'GET',
  url: 'https://api.au.apiconnect.ibmcloud.com/giovanninzibmcom-dev/conference/api/sessionstimetables',
  headers:
  {
    accept: 'application/json',
    'content-type': 'application/json',
    'x-ibm-client-id': '0f55f54a-d6b4-4d1e-bca8-c85b6f7e83fd'
  }
};

  request(options, function (error, response, body) {
    if (error) {
      console.error('Failed: %s', error.message);
      return res.status(500).end();
    } else {
      console.log('Success: ', body);
      sessionsTimeTable = JSON.parse(body);
      */
      // ** Next block not part of API Connect snipped.
      res.render('index', {  // this load ./views/index.ejs passing a variable (object) 
        pageTitle: 'Showcase 2016',
        pageId: 'home',
        sessionsTimeTable: sessionsTimeTable
      });
      /** 
    }
  });

/**************************************************************
* API call to API Connect running on Bluemix
* SNIPPET FROM  - IBM API CONNECT Portal -
* End
**************************************************************/  
  
});

module.exports = router;


