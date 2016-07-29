function split(wholeArray) {
	var splitArr = [];
	if (!wholeArray.length) return splitArr;
	var middle = Math.floor(wholeArray.length/2);
	splitArr.push(wholeArray.slice(0,middle)); 
	splitArr.push(wholeArray.slice(middle)); 
	return splitArr;
};

function merge(arr1, arr2){
	var mergedArr =[],
		idx1 = 0,
		idx2 = 0; 

	while(idx1 < arr1.length && idx2 < arr2.length){
		if (arr1[idx1] > arr2[idx2]){
			mergedArr.push(arr2[idx2]);
			idx2++; 
		} else {
			mergedArr.push(arr1[idx1]); 
			idx1++;
		}
	}

	if (idx1 < arr1.length) return mergedArr.concat(arr1.slice(idx1));
	if (idx2 < arr2.length) return mergedArr.concat(arr2.slice(idx2));
	return mergedArr; 
};

function mergeSort(array) {
	if (!array.length) return [];

	//BASE CASE: array of length 1
	if (array.length === 2) {
		return merge(split(array)[0],split(array)[1]); 
	} 
	else if (array.length ===3){
		var last = array.pop();
		return merge(merge(split(array)[0],split(array)[1]),[last]); 
	}

	//RECURSIVE
	return merge(mergeSort(split(array)[0]), mergeSort(split(array)[1]));


}