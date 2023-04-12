/* метод .mySome() проходить усіма елементами масиву і викликає callback 
функцію для кожного елемента. Якщо хоча б один елемент задовольняє умову, 
поверне true, в іншому випадку - false.
Зворотньопропорційно подібний до метода .every() */

Array.prototype.mySome = function (callback) {
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            return true;
        }
    }
    return false;
};

const arr = [1, 2, 3, 4, 5];
const hasEven = arr.mySome((num) => num % 2 === 0);

console.log(hasEven);
