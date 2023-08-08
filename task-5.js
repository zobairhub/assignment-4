function canPay(changeArray, totalDue) {

  if (changeArray.length === 0) {
    return "Sorry, empty wallet";
  }

  var sum = 0;
  for (var i = 0; i < changeArray.length; i++) {
    sum += changeArray[i];
  }

  return sum >= totalDue;
}

var myPocketWallet = [];
var chipsPrice = 30;
var result = canPay(myPocketWallet, chipsPrice);
console.log(result);
