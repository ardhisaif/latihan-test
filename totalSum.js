function solution(arr) {
    let result = 0
    for (let i = 0; i < arr.length; i++) {
        result += arr[i]
    }
    return result;
  }
exports.solution = solution;
  
  


/**
 * 
 * Runner Config
Maximum Memory
Maximum Runtime
:
:
100 MB
5 Seconds
Total Sum
Given an unsorted array of n elements, find if the total value of all the elements.

Complete the solution function in the editor below.

Input Format
An array of integers, arr, denoting the elements in the array.

Constraints
1 ≤ n ≤ 10

Output Format
The function must return an integer total sum of the array arr.

Sample Input
[1,2,3,4,5]

Sample Output
15
 */