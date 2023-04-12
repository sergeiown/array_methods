/* метод проходиться по кожному елементу масиву і викликає функцію callback 
для кожного елемента. Якщо хоча б одна ітерація поверне false, то метод 
поверне false. Якщо ж усі ітерації повернуть true, то метод поверне true.
Зворотньопропорційно подібний до метода .some() */

Array.prototype.myEvery = function (callback) {
    for (let i = 0; i < this.length; i++) {
        if (!callback(this[i], i, this)) {
            return false;
        }
    }
    return true;
};

const arr = [2, 2, 4, 4, 6];
const areEven = arr.myEvery((num) => num % 2 === 0);

console.log(areEven);
