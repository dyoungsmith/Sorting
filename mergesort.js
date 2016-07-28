function split(wholeArray) {
	var splitArr = [];
	if (!wholeArray.length) return splitArr;
	var middle = Math.floor(wholeArray.length/2);
	splitArr.push(wholeArray.slice(0,middle)); 
	splitArr.push(wholeArray.slice(middle)); 
	return splitArr;
};

function merge(arr1, arr2){
	var mergedArr =[]; 
	while(arr1.length && arr2.length){
		if (arr1[0]>arr2[0]){
			mergedArr.push(arr2.shift()); 
		} else {
			mergedArr.push(arr1.shift()); 
		}
	}
	if (arr1.length) return mergedArr.concat(arr1); 
	if (arr2.length) return mergedArr.concat(arr2);
	return mergedArr; 
};

function mergeSort(array) {

  /* your code here */

}