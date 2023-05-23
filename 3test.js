
function solution(matrix) {
    const rows = matrix.length;
    const cols = matrix[0].length;

    for (let i = 1; i < rows; i++) {
        matrix[i][0] += matrix[i - 1][0];
    }
    // console.log(matrix);

    for (let j = 1; j < cols; j++) {
        matrix[0][j] += matrix[0][j - 1];
    }
    // console.log(matrix);

    for (let i = 1; i < rows; i++) {
        for (let j = 1; j < cols; j++) {
            matrix[i][j] += Math.min(matrix[i - 1][j], matrix[i][j - 1]);
            // console.log(matrix[i - 1][j], matrix[i][j - 1]);
            console.log(matrix);
            console.log(matrix[i][j]);
            console.log(i, j);
        }
    }

    return matrix[rows - 1][cols - 1];
}

const input = [ 
    [1, 3, 1],
    [1, 5, 1],
    [4, 2, 1] ,

    // [ 1, 3, 1 ], 
    // [ 2, 5, 1 ], 
    // [ 6, 2, 1 ],
    
    // [ 1, 4, 5 ], 
    // [ 2, 5, 1 ], 
    // [ 6, 2, 1 ]
]
console.log(solution(input));

exports.solution = solution;
  



























/**
 * Runner Config
Maximum Memory
Maximum Runtime
:
:
64 MB
2 Seconds
Travel Cost in Multi Dimensional Array
You have been given a square matrix of integers, where each element represents the cost of a particular path. You want to find the minimum cost of traveling from the top-left corner to the bottom-right corner of the matrix. You can only move down or right at each step.

Write a function that takes in the matrix as input and returns the minimum cost of traveling from the top-left corner to the bottom-right corner.

Examples
Example 1:

Input:
[ [1, 3, 1],
  [1, 5, 1],
  [4, 2, 1] ]
Output: 7
Example 2:

Input:
[ [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9] ]
Output: 21
Example 3:

Input:
[ [0, 1],
  [1, 0] ]
Output: 1
Constraints:

1 <= size input <= 10
0 <= cost per cell <= 10
Only allowed to move in any combination of down and right
 */