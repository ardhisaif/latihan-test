const awal =  10
const akhir = 22

function isPalindrome(n) {
    let num = n.toString()
    let reverse = ""
    for (let j = num.length -1; j >= 0; j--) {
        reverse += num[j]
    }
    
    if (num === reverse) {
        return true
    }

    return false
}

function countPalindrome(start, end) {
    result = 0
    for (let i = start; i <= end; i++) {
        if (isPalindrome(i)) {
            result ++
        }
    }
    return result
}

console.log(countPalindrome(awal, akhir));
