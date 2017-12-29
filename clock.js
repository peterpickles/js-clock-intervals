//declare the initial level variables and retrive their element.
var minute = document.getElementById('minute');
var second = document.getElementById('second');
var hour = document.getElementById('hour');

//setting initial position of hands
var secondHand = 0;
var minuteHand = 0;
var hourHand = 0;

function showTime() {
	secondHand += (360/60);
	minuteHand += (360/3600);
	hourHand += (360/43200);
	second.style.transform = "rotate(" + secondHand + "deg)";
	minute.style.transform = "rotate(" + minuteHand + "deg)";
	hour.style.transform = "rotate(" + hourHand + "deg)";

}

function startClock () {
	setInterval(showTime, 1000);
}

 
startClock();