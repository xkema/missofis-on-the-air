/**
 * Firebase initializer moved to here to prevent PhantomJS error:
 * Error: No Firebase App '[DEFAULT]' has been created - call Firebase App.initializeApp(). in node_modules/firebase/firebase.js (line 28)
 */

// Initialize Firebase
var config = {

	apiKey: "AIzaSyAIl0R1GHtUY-afv83sk-UPCYHisZbsYKU",
	authDomain: "untitled-tv-show-feed.firebaseapp.com",
	databaseURL: "https://untitled-tv-show-feed.firebaseio.com",
	storageBucket: "untitled-tv-show-feed.appspot.com",

};

firebase.initializeApp(config);