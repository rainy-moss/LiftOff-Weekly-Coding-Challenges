function minMax(arr) {
	
	let sortedArray = arr.sort( (a, b) => a - b );
	
	sortedArray.splice(1,arr.length-2);
	
	return arr;
	
}