function bubbleSort(array){
	if(array.length === 1 || (array.length === 0)){
		return array;
	}
	var sorted = false;
	while(!sorted)
		sorted = true;
	for(var i = array.length -1; i >= 0;i--){
		for(var j = 0; j < i +1; j++){
			if(array[j]> array[j+1]){
				var temp1 = array[j];
				array[j] = array[j+1];
				array[j+1] = temp1;
				sorted = false
			}
		}	
	}
return array;
}

function split(array){
if(array.length === 1 || array.length === 0){
  return array; 
}
  return [array.slice(0, array.length/2), array.slice(array.length/2)];
}



function mergeSort(array){
  var newArr = [];
  var secondArr = [];
  var array1;
  var array2;
	if(array.length === 1 || array.length === 0){
		return array;
	}
	 array1 = split(array)[0]
	 array2 = split(array)[1];
	 
	 if(array1.length === 1){
	   console.log(array1);
	   newArr = newArr.concat(array1);
	 } else newArr = newArr.concat(mergeSort(array1));
	 
	 if(array2.length === 1){
	   console.log(array2)
	   secondArr = secondArr.concat(array2);
	 } else secondArr = secondArr.concat(mergeSort(array2));
	 
	 return newArr.concat(secondArr);
}



// function mergeSort(array){
// 	if(array.length === 1 || (array.length === 0)){
// 		return array;
// 	}
// 	mergeSort(array.slice(0, array.length/2)) + mergeSort(array.slice(array.length/2))

// }