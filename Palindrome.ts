function isPalindrome(x: number): boolean {
    if (x < 0 ) return false;
    if (x < 10) return true;
    if (x !== 0 && x % 10 === 0) return false;

    let str: string = x.toString();
    let right = str.length - 1;
    let reversed: string[] = [];
    for (let i = right; i >= 0; i--) {
        reversed.push(str[i]);
    }

    let reversedStr: string = reversed.join("");
    return str === reversedStr;
}

console.log(isPalindrome(1110));                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        