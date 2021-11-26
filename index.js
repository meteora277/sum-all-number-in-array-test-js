const sumItems = function(array) {
  let sum = 0;

  array.forEach(item => {
    //itterating over first loop is a must

    if (item instanceof Array) {
      //if item in array is an array, it will recursively call sumItem functions with item as an arguement
      //when it reaches base case it will save to addArray
      let addArray = [sumItems(item)];
     
      for (let item of addArray) {

        sum += item;
      }
    
    } else {

      sum += item;
    }
  });
  return sum;
};

console.log(sumItems([1,2,3,[4,5]]));

module.exports = sumItems;