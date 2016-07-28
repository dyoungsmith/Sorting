describe('Split Array function', function() {
  it('is able to split an array into two halves', function() {
    expect( split([1,2,3,4])).toEqual([[1,2],[3,4]]);
  });

  it('is able to split an array with odd number of elements', function() {
    expect( split([1,2,3,4,5])).toEqual([[1,2],[3,4,5]]);
  });

  it('is able to handle an empty array', function() {
    expect( split([])).toEqual([]);
  });
});

describe('Merge', function(){
  it('is able to merge two sorted arrays into one sorted array when both are equal size', function(){
    expect( merge([4,5],[1,3])).toEqual([1,3,4,5]);
  });

  it('is able to merge two sorted arrays of different sizes', function(){
    expect( merge([4,5,19],[1,3])).toEqual([1,3,4,5,19]);
  });

  it('is able to handle an empty array', function(){
    expect( merge([4,5],[])).toEqual([4,5]);
  });

  it('is able to merge two arrays of size 1', function(){
    expect( merge([45],[13])).toEqual([13,45]);
  });
});

describe('Merge Sort', function(){
  it('is able to handle an empty array', function(){
    expect( mergeSort([])).toEqual([]);
  });

  it('is able to sort an array of even length', function(){
    expect( mergeSort([4,5,19,1,6,2])).toEqual([1,2,4,5,6,19]);
  });

  it('is able to sort an array of odd length', function(){
    expect( mergeSort([4,5,19,1,6])).toEqual([1,4,5,6,19])
  });

  it('is able to sort an array with repeats', function(){
    expect( mergeSort([4,5,19,1,6,2,5])).toEqual([1,2,4,5,5,6,19]);
  });
});