var t = new Date();
var m = t.getMinutes();
var interval = 2; //<<= config interval time between alerts (minute)
var str = "Time to get up and stretch!!!"; //content of message
var mod = m % interval;
var delay = interval * 60000; //1 minute = 60000
var firstDelay = (mod != 0) ? ((interval - mod) * 60000) : 0;
function msg() {
	if(document.visibilityState == "visible")
		alert(str);
	setTimeout(msg, delay);
}
setTimeout(msg, firstDelay);

//https://stackoverflow.com/a/7746522
//You are passing the result of executing the function instead of the function itself. Since the result of the function is undefined, you are executing checkIfGameAlreadyStarted and then passing undefined to setInterval which doesn't do anything.
//When you pass checkIfGameAlreadyStarted() that calls the function immediately and gets it's return value. When you pass checkIfGameAlreadyStarted that passes a reference to the function so setInterval can call it later (which is what you want).
