var mySampleArray = [3423,5,4,47889,654,8,867543,23,48,5345,234,6,78,54,23,67,3,6,432,55,23,25,12];

function sumTheElements(theArray){
	
	var total = 0;
	for (let i=0; i<mySampleArray.length; i++){
	  total += mySampleArray[i]
	};
	

	return total;
}

console.log(sumTheElements(mySampleArray));