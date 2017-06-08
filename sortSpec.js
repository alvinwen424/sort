describe('bubble sort',function(){
	var bubbleArray = [];

	beforeEach(function(){
		bubbleArray = [];
	});
it('should be sorted with an array', function(){
	expect(bubbleSort([1])).toEqual([1]);
});
it('should sort an array longer than 1', function(){
	expect(bubbleSort([1,23,54,6,2,15])).toEqual([1,2,6,15,23,54]);
});

});

describe('split array function', function(){
it('is able to split in half', function(){
		expect(split([1,2])).toEqual([[1],[2]]);
	});
});

describe('merge sort', function(){
	var mergeArray = [];

it('should be sorted with an array of length 0 or 1', function(){
	expect(mergeSort([1])).toEqual([1]);
});

it('should sort an array longer than 1', function(){
	expect(mergeSort([1,23,54,6,2,15])).toEqual([1,2,6,15,23,54]);
});


});