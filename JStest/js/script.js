var myObj = {
	number1: "one", 
	number2: "two", 
	number3: "three"
};

var myArr = [
	"one", 
	"two", 
	"three"
];

for (var prop in myObj) {
	console.log(prop + ": " + myObj[prop]);
};

for (var prop in myArr) {
	console.log(prop + ": " + myArr[prop]);
}