/* функція mySplice використовує зазначені аргументи start, deleteCount, і items 
для вставки, видалення або заміни елементів у масиві. Вона розраховує нові індекси, 
якщо вони виходять за межі довжини масиву, і повертає масив видалених елементів. */

Array.prototype.mySplice = function (start, deleteCount, ...items) {
    if (start < 0) {
        start = this.length + start;
    }
    if (start > this.length) {
        start = this.length;
    }
    if (deleteCount < 0) {
        deleteCount = 0;
    }
    if (deleteCount > this.length - start) {
        deleteCount = this.length - start;
    }
    const deleted = this.slice(start, start + deleteCount);
    const left = this.slice(0, start);
    const right = this.slice(start + deleteCount);
    this.length = 0;
    [...left, ...items, ...right].forEach((item) => this.push(item));
    return deleted;
};

const arr = [1, 2, 3, 4, 5];
const deleted = arr.mySplice(1, 2, 6, 7);

console.log(arr);
console.log(deleted);
