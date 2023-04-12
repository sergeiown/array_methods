/* callback - це функція зворотного виклику, яка буде викликатися для кожного 
елемента масиву. Функція зворотного виклику приймає три аргументи: поточний 
елемент, індекс поточного елемента і посилання на вихідний масив. */

Array.prototype.customMap = function (callback) {
    const result = [];
    for (let i = 0; i < this.length; i++) {
        result.push(callback(this[i], i, this));
    }
    return result;
};

const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = numbers.customMap(function (item) {
    return item * 2;
});

console.log(doubledNumbers);
