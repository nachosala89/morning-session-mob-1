var atMostNGivenDigitSet = function(digits, n) {
  const totalDigits = n.toString().length;
  let counter = 0;
  for (let i = 0; i < n; i++) {
      const arr = i.toString().split('');
      let isIncluded = true;
      for (let j = 0; j < arr.length; j++){
          if (!digits.includes(arr[j])) {
             isIncluded = false; 
          }
      }
      if (isIncluded) {
          counter++;
      } 
  }
  return counter;
};

//expected output = 20
console.log(atMostNGivenDigitSet(["1","3","5","7"], 100));