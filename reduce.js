  
/**
 * To run this file in Gitpod, use the 
 * command node reduce.js in the terminal
 */


// Summing an array of numbers:
const nums = [0, 1, 2, 3, 4]; // starts at 0 as the first integer 
let sum = nums.reduce((acc, curr) => acc + curr, 0); // starts at 10 as the first integer 
console.log(sum);  

// Simplified explination: 

// const nums = [0, 1, 2, 3, 4]; // starts at 0 as the first integer
// let sum = nums.reduce((acc, curr) => {
//   console.log(
//     "Accumulator", acc, 
//     "Current Value", curr, 
//     "Total", acc + curr
//   ); 
//   return acc + curr; 
// }, 10); // starts at 10 as the first integer 
// console.log(sum);  

const teamMembers = [
  {
    name: 'Andrew',
    profession: 'Developer',
    yrsExperience: 5
  },
  {
    name: 'Ariel',
    profession: 'Developer',
    yrsExperience: 7
  },
  {
    name: 'Michael',
    profession: 'Designer',
    yrsExperience: 1
  },
  {
    name: 'Kelly',
    profession: 'Designer',
    yrsExperience: 3
  }
];

// Totaling a specific object property


// Grouping by a property, and totaling it too
