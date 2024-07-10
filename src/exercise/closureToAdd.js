//Primera solución
function sumWithClosure(firstNum = 2) {
  return function (secondNum = 9) {
    return firstNum + secondNum;
  };
}

//Segunda solución
function sumWithClosure(firstNum) {
  let a = firstNum;
  return function (secondNum) {
    let b = secondNum;
    if (!b) {
      return a;
    } else {
      return a + b;
    }
  };
}

//Tercera solución
export function sumWithClosure(firstNum) {
  return function (secNum) {
    return firstNum + (secNum ?? 0);
  };
}

sumWithClosure(2)(3);

//Cuarta solución
function sumWithClosure(firstNum) {
  function sum(secondNum = 0) {
    return firstNum + secondNum;
  }
  return sum;
}
sumWithClosure(2)(3);
sumWithClosure(90)();
