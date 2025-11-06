function isHappy(n: number): boolean {
    let slow = n;
    let fast = getSumofSquares(n);

    while (fast !== 1 && slow !== fast) {
        slow = getSumofSquares(slow);
        fast = getSumofSquares(getSumofSquares(fast));
    }

    return fast === 1;
}

function getSumofSquares(n: number): number {
    let sum = 0;

    while (n > 0) {
        const digit = n % 10;
        sum+= digit * digit;
        n = Math.floor(n / 10);
    }

    return sum;
}

console.log(isHappy(19));