//find min and max in array
const nums = [-1, 0, 5, 10, 49];
// let min = nums[0];
// let max = nums[0];

// nums.forEach((num) => {
//   //find min
//   if (min > num) {
//     min = num;
//   }
//   //find max
//   if (max < num) {
//     max = num;
//   }
// });
// console.log(max, min);

function findMin(items) {
  let min = items[0];
  items.forEach((item) => {
    if (min > num) {
      min = num;
    }
  });
  return min;
}
function findMax(items) {
  let max = items[0];
  items.forEach((item) => {
    if (max < num) {
      max = num;
    }
  });
  return max;
}

console.log(findMin(nums));
console.log(findMax(nums));
