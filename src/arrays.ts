/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    let newArr: number[];
    if (numbers.length > 1) {
        newArr = [...numbers];
        newArr.splice(1, newArr.length - 1, newArr[newArr.length - 1]);
        return newArr;
    } else if (numbers.length === 1) {
        newArr = [...numbers];
        newArr.splice(1, 0, newArr[newArr.length - 1]);
        return newArr;
    }
    return (newArr = []);
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    const tripled = numbers.map((nums: number): number => nums * 3);
    return tripled;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    const ints = numbers.map((strs: string): number =>
        Number(strs) ? Number(strs) : 0
    );
    return ints;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    const strss = amounts.map((strs: string): string =>
        strs.charAt(0) === "$" ? strs.slice(1) : strs
    );
    return stringsToIntegers(strss);
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    const newList = messages.filter(
        (mes: string): boolean => !mes.includes("?")
    );
    const retList = newList.map((msg: string): string =>
        msg.includes("!") ? msg.toUpperCase() : msg
    );
    return retList;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    const shorts = words.filter((msg: string): boolean => msg.length < 4);
    return shorts.length;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    const value = colors.every(
        (col: string): boolean =>
            col === "red" || col === "blue" || col === "green"
    );
    return value;
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    const sum = addends.reduce(
        (currentTotal: number, num: number) => currentTotal + num,
        0
    );
    const newArr = addends.join("+");
    if (sum === 0) {
        return String(sum + "=" + 0);
    } else {
        return String(sum + "=" + newArr);
    }
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    const firstNeg = values.findIndex((num: number): boolean => num < 0);
    let newList: number[] = [];
    if (firstNeg !== -1) {
        const beforeNeg = values.slice(0, firstNeg);
        const sum = beforeNeg.reduce(
            (currentTotal: number, num: number) => currentTotal + num,
            0
        );
        newList = [...values];
        newList.splice(firstNeg + 1, 0, sum);
    } else {
        const sum = values.reduce(
            (currentTotal: number, num: number) => currentTotal + num,
            0
        );
        newList = [...values, sum];
    }

    return newList;
}
