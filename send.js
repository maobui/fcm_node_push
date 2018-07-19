var FCM = require('fcm-node');
    // var serverKey = 'YOURSERVERKEYHERE'; //put your server key here
var serverKey = require('./your_server_key.json'); //put your server key here
var fcm = new FCM(serverKey);

var message = { //this may vary according to the message type (single recipient, multicast, topic, et cetera)
	to: '/topics/key_jlin', 
	// collapse_key: 'your_collapse_key',
	
	// notification: {
		// title: 'Title of your push notification', 
		// body: 'Body of your push notification' 
	// },
	
	data: {  //you can send only notification or only data(or include both)
		author: 'TheRealJLin',
		message:	"Stop by, say hi & check out our own Jessica Lin's panel today on women & computing",
		date:	'1531988398935',
		authorKey: 'key_jlin'
	}
};

fcm.send(message, function(err, response){
	if (err) {
		console.log("Something has gone wrong!", err);
	} else {
		console.log("Successfully sent with response: ", response);
	}
});