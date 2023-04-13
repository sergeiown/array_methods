/* функція customSort приймає масив array як аргумент. Вона використовує вкладені цикли for
 для реалізації алгоритму BubbleSort. Зовнішній цикл перебирає всі елементи масиву, а 
 внутрішній цикл порівнює два сусідні елементи і міняє їх місцями, якщо вони розташовані 
 неправильно. Зрештою функція customSort повертає відсортований масив. */

function customSort(array) {
    let length = array.length;

    for (let i = 0; i < length; i++) {
        for (let j = 0; j < length - i - 1; j++) {
            if (array[j] > array[j + 1]) {
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }

    return array;
}

const numbers = [1, 3, 2, 5, 0, 4, 7, 6, 9, 8];
const sortedNumbers = customSort(numbers);

console.log(sortedNumbers);

/* Другий варіант.
Якщо вказано функцію compareFunction, то вона використовується для порівняння 
елементів масиву, інакше елементи порівнюються як числа. Відсортований масив 
повертається як результат. */

Array.prototype.mySort = function (compareFunction) {
    for (let i = 0; i < this.length - 1; i++) {
        for (let j = 0; j < this.length - i - 1; j++) {
            if (compareFunction ? compareFunction(this[j], this[j + 1]) > 0 : this[j] > this[j + 1]) {
                let temp = this[j];
                this[j] = this[j + 1];
                this[j + 1] = temp;
            }
        }
    }
    return this;
};

const otherNumbers = [3, 1, 5, 2, 11, 4, 0, 6, 8, 7];

const otherSortedNumbers = otherNumbers.mySort((a, b) => a - b);

console.log(otherSortedNumbers);
