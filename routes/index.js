var express = require('express');

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



// *** PLACE HERE THE SNIPPET FROM  - IBM API CONNECT Portal -
// - comment out: createRoute(sessionsTimeTable); 
// - remove filter attribute in te options
// - parse and invoke createRoute(). 
// -- Add following code console.log('Success: ', body);
// ---   sessionsTimeTable = JSON.parse(body);
// ---  createRoute(sessionsTimeTable);

//

var request = require("request");

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
  if (error) return console.error('Failed: %s', error.message);

  console.log('Success: ', body);
  sessionsTimeTable = JSON.parse(body);
  createRoute(sessionsTimeTable);
});


function createRoute(sessionsTimeTable) {
  router.get('/', function (req, res) {
    res.render('index', {  // this load ./views/index.ejs passing a variable (object)
      pageTitle: 'Showcase 2016',
      pageId: 'home',
      sessionsTimeTable: sessionsTimeTable
    });
  });
}



module.exports = router;


