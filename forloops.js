// write a program to print the array in reverse order
//      input:-- [1,2,3,4,5,{id:1,age:25},[1,2,3]]
// 	 ouput:-- [[1,2,3],{id:1,age:25},5,4,3,2,1]
let input=[1,2,3,4,5,{id:1,age:25},[1,2,3]];
console.log(input.reverse());

	 
//  write a program to print the string in reverse order
//  input: "vamsi"
//  output: "ismav"
//  take one more string and reverse it

let input1='vamsi';
console.log(input1.split('').reverse().join(''));


 
//  write a program to print the age in the given array
//   input:-- [1,2,3,4,5,{id:1,age:25},[1,2,3]]
//     output:-- 25

let array = [1, 2, 3, 4, 5, { id: 1, age: 25 }, [1, 2, 3]];
let age = array.find(item => typeof item === 'object' && item.age !== undefined).age;
console.log(age);