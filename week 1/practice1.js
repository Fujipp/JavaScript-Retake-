console.log("Hello World My name is Anawat");

//-------------------
// Practice 1

// Create a program that performs the following operations on an array of integers:
// • Find the sum of all elements in the array.
// • Calculate the average of the elements.
// • Identify and print the largest and smallest elements in the array.

let numbers = [5,4,3,2,1]
let sum = 0
for (i=0;i<numbers.length;i++) {
    console.log(numbers[i])
    sum = sum + numbers[i];
}
console.log('SUM : ' + sum)

console.log('Average : ' + sum/numbers.length)

console.log('Max : ' + Math.max(...numbers))
console.log('Min : ' + Math.min(...numbers))

//-------------------
// Practice 1 Ex
// Function Declaration
function integerOp(nums) {
  // console.log(nums)
  nums.forEach((element) => {
    let sum = 0
    sum = sum + element; //sum+=element
  });
  const avg=sum/nums.length
  const max=Math.max(...nums)
  const min=Math.min(...nums)
  return{sum:sum, avg:avg, max:max, min:min}
}


//arrow function and expression
const integerOp2=(nums)=> nums
//array literal -[1,2,3,4, -1]
const x=integerOp([1,2,3,4, -1])
const values=[1,2,3,4, -1] //values=110fab
values.push(100)

//array variable
console.log(integerOp(values))
const z=5
console.log(z)



//function declaration
function integerOp(nums){ //nums=[1,5,20,3, -1]
    let sum=0
   nums.forEach(element => {
    sum=sum+element //sum+=element
   });
   const avg=sum/nums.length
   const max=Math.max(...nums)
   const min=Math.min(...nums)
//    const result={sum:sum, avg:avg, max:max, min:min}
//    const result2=[sum, avg, max,min]
//    return [sum, avg, max,min]
return {sum, avg, max, min}
}

