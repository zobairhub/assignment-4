function findAddress(obj) {
  const address = "__";
  
  const street = obj.street || address;
  const house = obj.house || address;
  const society = obj.society || address;

  return [street, house, society];
}

var myAddressObject = {
  street: 10,
  house: '15A',
  society: 'Earth Perfect'
};

var [streetNumber, houseName, societyName] = findAddress
(myAddressObject);

var addingComa = [streetNumber, houseName, societyName].join(",");
