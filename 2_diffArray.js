function diffArray(arr1, arr2) {
    var newArr = [];
    
    //console.log(arr1.indexOf(7));
    function myFun(first, second){
    for (var x = 0; x < first.length; x++){
        console.log(first[x]);
        if (second.indexOf(first[x]) === -1){
            newArr.push(first[x]);
        }
        
    }
}

myFun(arr1, arr2);
myFun(arr2, arr1);
console.log(newArr);
  }
  
  diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);