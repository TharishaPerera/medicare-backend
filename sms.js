// Download the helper library from https://www.twilio.com/docs/node/install
// Find your Account SID and Auth Token at twilio.com/console
// and set the environment variables. See http://twil.io/secure


// const accountSid = process.env.TWILIO_ACCOUNT_SID;
// const authToken = process.env.TWILIO_AUTH_TOKEN;
// const client = require('twilio')(accountSid, authToken);

// client.messages
//   .create({
//      body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
//      from: '+15017122661',
//      to: '+94716831606'
//    })
//   .then(message => console.log(message.sid));

import axios from "axios";

const options = {
  method: 'GET',
  url: 'https://phonenumbervalidatefree.p.rapidapi.com/ts_PhoneNumberValidateTest.jsp',
  params: {number: '+94716831606'},
  headers: {
    'X-RapidAPI-Key': '1b33c73b1cmshff7692670fc5701p17f528jsn5034996fe928',
    'X-RapidAPI-Host': 'phonenumbervalidatefree.p.rapidapi.com'
  }
};

axios.request({options}).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});