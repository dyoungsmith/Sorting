var bubbleSort = function(arr) {
	var sortedArr = [];

	if (!arr.length) return sortedArr;

	while (arr.length || !madeIt) {
		var madeIt = true;
		for (var i = 0; i < arr.length; i++) {
			if (arr[i] > arr[i + 1]) {
				var temp = arr[i];
				arr[i] = arr[i + 1];
				arr[i + 1] = temp;
				madeIt = false;
			}
		}
		sortedArr.unshift(arr.pop());
	}
	return sortedArr;
}