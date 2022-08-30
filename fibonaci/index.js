const checkIsPrima = (input) => {
    let divider = 0;
    for (let i = 1; i <= input; i++) {
      if (input % i == 0) {
        divider++;
      }
    }
    if (divider == 2) {
      return console.log(`${input}, prima`);
    }
  
    return console.log(input);
  };
  
  const fibo = (number) => {
    let val1 = 0;
    let val2 = 1;
    let nextVal = 0;
  
    console.log(val1);
    console.log(val2);
  
    nextVal = val1 + val2;
  
    while (nextVal <= number) {
      checkIsPrima(nextVal);
  
      val1 = val2;
      val2 = nextVal;
      nextVal = val1 + val2;
    }
  };
  
  fibo(200);