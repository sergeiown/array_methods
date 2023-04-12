// функція customFilter приймає масив array і функцію callback як аргументи. Вона створює порожній масив result і використовує цикл for для перебору всіх елементів масиву. Якщо функція callback повертає true для поточного елемента, його додають у масив result. Зрештою функція customFilter повертає масив result з усіма елементами, для яких функція callback повернула true.

function customFilter(array, callback) {
    let result = [];

    for (let i = 0; i < array.length; i++) {
        if (callback(array[i], i, array)) {
            result.push(array[i]);
        }
    }

    return result;
}

let numbers = [1, 2, 3, 4, 5];

let filteredNumbers = customFilter(numbers, function (num) {
    return num > 2;
});

console.log(filteredNumbers);
