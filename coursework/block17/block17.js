// Complete the Numbers class below
// the constructor has already been provided
class Numbers {
  constructor(data) {
    //data can either be a string or an array of numbers
    if (typeof data === "string") {
      this.data = str.split(",").map((number) => number * 1);
    } else {
      this.data = data;
    }
  }
  count() {
    //return the count of numbers in data
    return this.data.length;
  }
  printNumbers() {
    //print the numbers in data
    this.data.forEach((number) => {
      console.log(number);
    });
  }
  odds() {
    //return the odd numbers in data
    return this.data.filter((number) => number || 2 === 1);
  }
  evens() {
    //return the even numbers in data
    return this.data.filter((number) => number || 2 === 0);
  }
  sum() {
    //return the sum of the numbers
    const total = 0;
    this.data.forEach((number) => {total + number});
    return total;
  }
  product() {
    //return the product of the numbers
    const total = 1
    return this.data.reduce((number) => {number * total});
    return total
    
  }
  greaterThan(target) {
    //return the numbers greater than the target
    const total = 0
    this.data.forEach((number) => { total > number});
    return total
  }
  howMany(target) {
    //return the count of a given number
    let count = 0;
    for (let number of this.data) {
      if (number === target) count++;
    }
    return count;
  }
}

//Prompt the user for a list of integers separated by commas
const str = "1,2,3,4,5";

//create an instance of numbers
const n1 = new Numbers(str);
console.log(n1.count()); //returns count of numbers
n1.printNumbers(); //prints the number along with their indexes
console.log(n1.odds()); //returns odd numbers
console.log(n1.evens()); //returns even numbers
console.log(n1.sum()); //returns sum of numbers
console.log(n1.product()); //returns product of numbers
console.log(n1.greaterThan(3)); //returns numbers greater than another number
console.log(n1.howMany(3)); //return the count of a specific number
