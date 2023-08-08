function sortMaker(arr) {
  
  if (arr.length !== 2) {
      return 'Invalid Input';
  }

  let [number1, number2] = arr;
  if(number1 < 0 || number2 < 0 ){
    return "Invalid Input";
  }
  else if( number1 === number2)
  {
    return 'equal';
  }
  else
  {
    return [number1, number2].sort(function(number3, number4){
      return number4 - number3;
    });
  }
}
let result = sortMaker([4,-2]);
console.log(result);