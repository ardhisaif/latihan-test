
function solution(x) {
    arr = []
    for (let i = 1; i <= x; i++) {
        const num = i;
        if (num % 3 === 0 && num % 5 === 0) {
            arr.push("scan inspect")
        }else{
            if (num % 3 === 0) {
                arr.push("scan")
            }else if (num % 5 === 0) {
                arr.push("inspect")
            }else{
                arr.push(num.toString())
            }
        }
    }
    return arr;
  }
  
  exports.solution = solution;

  



  /**
   * 
02
03

Security Package Scan and Inspection

English

100%
Runner Config
Maximum Memory
Maximum Runtime
:
:
32 MB
1 Seconds
Security Package Scan & Inspection
You are joining a security team of a company. Each day the company receive hundreds of nearly identical package boxes. The company stated that security team should do a random inspection to avoid a possible dangerous object. You are tasked to develop the program.

The company gave the instruction as below:

The inspection process has two possible actions: scan and inspect.
Each package has labeled with unique number, start from 1. The number of package is vary each day. Consider this as input.
The program should select the action based on the number on the package number. The action may differ, depend on the number:
If the package number is a multiple of 3, then scan
If the package number is a multiple of 5, then inspect
If the package number is a multiple of 3 & 5, then do both: scan inspect 
If the package number is not satisfy previous condition, then just print the number.
To make things easier, the program should have input of integer, and the output is array of string.
Example
Example 1:

Input: x = 3
Output: ["1","2","scan"]
Example 2:

Input: x = 5
Output: ["1","2","scan","4","inspect"]
Example 3:

Input: x = 15
Output: ["1","2","scan","4","inspect","scan","7","8","scan","inspect","11","scan","13","14","scan inspect"]


Constraints:

1 <= n <= 104
   */