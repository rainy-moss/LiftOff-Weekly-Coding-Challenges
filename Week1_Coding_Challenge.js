// Write a function that takes the base and height of a triangle and return its area.

function triArea(base, height) {
	let area = (base * height) / 2
	return area
}

// The time has a format: hours:minutes. Both hours and minutes have two digits, like 09:00.
// Make a regexp to find time in the string: 
// Breakfast at 09:00 in the room 123:456. 
// In this task there’s no need to check time correctness yet, so 25:99 can also be a valid result. 
// The regexp should not match 123:456.

const REGEXP = /\b\d{2}:\d{2}/

// Your function will be passed two functions, f and g, that don't take any parameters. Your function has to call them, and return a string which indicates which function returned the larger number.

// If f returns the larger number, return the string f.
// If g returns the larger number, return the string g.
// If the functions return the same number, return the string neither.

function whichIsLarger(f, g) {
	
	if (f() === g()){
		largest = "neither";
	}else if (f() > g()){
		largest = "f";
	}else if (f() < g()){
		largest = "g";
	}
	return largest;
}