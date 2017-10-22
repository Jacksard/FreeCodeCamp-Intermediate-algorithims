
function sumAll(arr) {
    var first = arr[0];
    var second = arr[1];

    var start = Math.min(first, second);
    var end = Math.max(first, second);
 
    var sum = first + second;

    for (var i = start + 1; i < end ; i++){
        sum += i;
    }
    console.log(sum);

    return sum;
  }
  
  sumAll([1, 4]);