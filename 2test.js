
  
function solution(x) {
    const stack = [];
  
    for (let i = 0; i < x.length; i++) {
      const char = x[i];
  
      if (char === '(' || char === '[' || char === '{') {
        stack.push(char);
      } else {
        if (
          (char === ')' && stack[stack.length - 1] === '(') ||
          (char === ']' && stack[stack.length - 1] === '[') ||
          (char === '}' && stack[stack.length - 1] === '{')
        ) {
          stack.pop();
        } else {
          return false;
        }
      }
    }
  
    return stack.length === 0;
  }
    
  exports.solution = solution;
  
// function solution(x) {

//     let result = 0

//     const brackets = {
//         '(': ')',
//         '[': ']',
//         '{': '}',
//     };

//     for (let i = 0; i < x.length; i += 2) {
//         const char = x[i];
//         const close = x[i + 1]
//         console.log(brackets[`${char}`], close);
        
//         if (char === "(" || char === "[" || char === "{") {
//             if (brackets[`${char}`] === close) {
//                 result ++
//             }
//         }

        
//     }

//     return result === x.length/2
// }

// console.log(solution("(){}[]"));
  
//   exports.solution = solution;

// function solution(x) {
//     let flag = false

//     for (let i = 0; i < x.length ; i += 2) {
//         if (x[i] === "(") {
//             if (x[i+1] === ")") {
//                 flag = true
//             }else{
//                 flag = false
//             }
//         }

//         if (x[i] === "{") {
//             if (x[i+1] === "}") {
//                 flag = true
//             }else{
//                 flag = false
//             }
//         }

//         if (x[i] === "[") {
//             if (x[i+1] === "]") {
//                 flag = true
//             }else{
//                 flag = false
//             }
//         }

        
//     }
//     return flag;
// }

// console.log(solution("()[]1"));

// exports.solution = solution;
  













/**
 * Runner Config
Maximum Memory
Maximum Runtime
:
:
64 MB
2 Seconds
Parentheses
Given a string x containing combination of the characters '(', ')', '{', '}', '[' and ']'.

Try to create a program to check the string combination is valid or not.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
Examples
Example 1:

Input: x = "()"
Output: true
Example 2:

Input: x = "()[]{}"
Output: true
Example 3:

Input: x = "(]"
Output: false
Constraints:

1 <= x.length <= 103
x valid if consists parentheses only '()[]{}'.
 */