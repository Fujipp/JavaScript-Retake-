const nums = [1,2,3,4,5,0,-1,-2]
//for
console.log('for')
for(let i=0;i<nums.length;i++){
    console.log(nums[i])
}
//forEach
console.log('forEach')
nums.forEach(element => {
    console.log(element)
})
//for...of
console.log('for...of')
for(const element of nums) {
    console.log(element)
}