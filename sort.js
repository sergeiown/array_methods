/* функція customSort приймає масив array як аргумент. Вона використовує вкладені цикли for для реалізації алгоритму BubbleSort. Зовнішній цикл перебирає всі елементи масиву, а внутрішній цикл порівнює два сусідні елементи і міняє їх місцями, якщо вони розташовані неправильно. Зрештою функція customSort повертає відсортований масив. */

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

const numbers = [1, 3, 2, 5, 4, 7, 6, 9, 8];
const sortedNumbers1 = customSort(numbers);

console.log(sortedNumbers1);
