function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

console.log(add(5,3)); //8
console.log(subtract(5,3)); //2

//Corrected function with proper type narrowing
function processValue(value: string | number): string {
  if (typeof value === 'string') {
    return value.toUpperCase();
  } else if (typeof value === 'number') {
    return value.toString(); //Corrected
  } else {
    return ''; //Handle any other cases
  }
}
console.log(processValue(5)); //"5"
console.log(processValue("hello")); //"HELLO"