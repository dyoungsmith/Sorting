describe('Bubble Sort', function(){
  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });

  it('handles an array of one element', function(){
    expect( bubbleSort([2]) ).toEqual( [2] );
  });

  it('handles an array of multiple elements', function(){
    expect( bubbleSort([5,2,19]) ).toEqual( [2,5,19] );
  });

  it('handles an array with duplicate elements', function(){
    expect( bubbleSort([5,2,19,2,5]) ).toEqual( [2,2,5,5,19] );
  });

});