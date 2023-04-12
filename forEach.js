/* callback - це функція зворотного виклику, яка буде викликатися для кожного 
елемента масиву. Функція зворотного виклику приймає три аргументи: поточний 
елемент, індекс поточного елемента і посилання на вихідний масив. */

Array.prototype.customForEach = function (callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this);
    }
};

const numbers = [1, 2, 3, 4, 5];

numbers.customForEach(function (item, index, array) {
    console.log(item, index, array);
});
