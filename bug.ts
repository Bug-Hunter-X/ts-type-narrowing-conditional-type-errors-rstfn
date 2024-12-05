function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

console.log(add(5,3)); //8
console.log(subtract(5,3)); //2

//Uncommon bug: Type narrowing in conditional types
function processValue(value: string | number): string {
  if (typeof value === 'string') {
    return value.toUpperCase(); //Correct
  }
  else {
    return value.toString(); //Error: Property 'toString' does not exist on type 'number'.
  }
}