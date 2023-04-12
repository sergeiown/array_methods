/* callback - це функція зворотного виклику, яка буде викликатися для кожного 
елемента масиву. Функція зворотного виклику приймає чотири аргументи: акумулятор, 
поточний елемент, індекс поточного елемента і посилання на вихідний масив. */

Array.prototype.customReduce = function (callback, initialValue) {
    let accumulator = initialValue !== undefined ? initialValue : this[0];
    let startIndex = initialValue !== undefined ? 0 : 1;
    for (let i = startIndex; i < this.length; i++) {
        accumulator = callback(accumulator, this[i], i, this);
    }
    return accumulator;
};

const numbers = [1, 2, 3, 4, 5];
const sum = numbers.customReduce(function (accumulator, currentValue) {
    return accumulator + currentValue;
});

console.log(sum);
