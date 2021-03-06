//===========================================
// PROBLEM 12 - HIGHLY DIVISIBLE TRIANGULAR NUMBER
//===========================================
// The sequence of triangle numbers is generated by adding the natural numbers.
// So the 7th triangle number would be 1 + 2 + 3 + 4 + 5 + 6 + 7 = 28. The first ten terms would be:

// 1, 3, 6, 10, 15, 21, 28, 36, 45, 55, ...

// Let us list the factors of the first seven triangle numbers:

//  1: 1
//  3: 1,3
//  6: 1,2,3,6
// 10: 1,2,5,10
// 15: 1,3,5,15
// 21: 1,3,7,21
// 28: 1,2,4,7,14,28
// We can see that 28 is the first triangle number to have over five divisors.

// What is the value of the first triangle number to have over five hundred divisors?

//===========================================
// PSEUDOCODE:
// 1) FUNCTION TO GENERATE TRIANGLE NUMBERS
// 2) FUNCTION TO GET DIVISORS, PREFERABLY EVEN A METHOD WITH JUST NUMBER OF DIVISORS IS SUFFICIENT
// 3) USING BOTH THESE FUNCTIONS, IDENTIFY FIRST NUMBER WITH 500 DIVISORS
//===========================================

//===========================================
// NOTE THAT DIVISORS OCCUR IN PAIRS - HAVE A MAX LIMITER FLAG THAT GOES DOWN WITH THE SECOND HALF OF EACH PAIR?
//===========================================

// const triangleNumbers = n => (n > 0 ? n + triangleNumbers(n - 1) : n);
//===========================================
// POTENTIAL CALL STACK MEMORY ISSUES FOR LARGER NUMBERS?
// PROBABLY, SO NEVER MIND
//===========================================
const triangleNumbers = (n, sum = 0) => {
    for (let i = 0; i <= n; i++) sum += i;
    return sum;
};
// console.log(triangleNumbers(7)); // 28
//===========================================
// NOTE: YOU ALSO HAVE TO HANDLE THE CASE WHERE TWO FACTORS ARE EQUAL AND NOT COUNT THEM TWICE
// FOR EXAMPLE: 25: 1,5,5,25 (has only 3)
//===========================================
const countNumOfDivisors = (n, numOfDivisors = 1, maxLimitFlag = n) => {
    let iterator = 2;
    while (iterator < maxLimitFlag) {
        if (n % iterator === 0) {
            maxLimitFlag = n / iterator;
            numOfDivisors =
                maxLimitFlag === iterator
                    ? numOfDivisors + 0.5
                    : numOfDivisors + 1;
        }
        iterator++;
    }
    return numOfDivisors * 2;
};
// console.log(countNumOfDivisors(25));
const highlyDivisible = (n, found = false, iter = 0) => {
    while (!found) {
        found = countNumOfDivisors(triangleNumbers(++iter)) > n ? true : false;
    }
    return triangleNumbers(iter);
};
console.log(highlyDivisible(500));
