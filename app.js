function add() {
  let sum = 0;
  let num = parseFloat(prompt("Enter a number (Enter 'q' or 'Q' to stop):"));
  while (!isNaN(num) && num !== "q" && num !== "Q") {
    sum += num;
    num = parseFloat(prompt("Enter a number:"));
  }
  return sum;
}
console.log(add());
