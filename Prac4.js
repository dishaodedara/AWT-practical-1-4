function factorial(n) {
    if (n === 0) {
      return 1;
    } else {
      function recursiveFactorial(x) {
        if (x === 1) {
          return 1;
        }
        return x * recursiveFactorial(x - 1);
      }
      return recursiveFactorial(n);
    }
  }
  
  console.log(factorial(5)); 
  