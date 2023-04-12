# Array methods

## This project presents the implementation of some array methods:

1.  **.every**
    .every() is an array method that performs the specified function for each element of the array and returns true only if
    function returns true for all elements. If the function returns false for one or more elements, the every method will return
    false.

    The syntax of the .every() method is:

    array.every(function(currentValue, index, arr), thisValue)
    currentValue - the current element of the array.
    index - index of the current element in the array.
    arr - array, for which the method every is called.
    thisValue (optional) - the value that will be used as this inside the function.

    An example of the use of .every():

    ```
    const numbers = [1, 2, 3, 4, 5];

    const result = numbers.every(function (num) {
    return num > 0;
    });

    console.log(result); // true
    ```

2.  **.filter**
    .filter() is a JavaScript method that creates a new array containing only those elements of the original array that
    satisfy the condition specified in the filter function. The function passed to .filter() takes three arguments: the current
    element, the element index and the original array itself.

    The syntax of filter method is:

    ```
    array.filter(function (currentValue, index, array) {
    // condition to filter items
    });

    ```

    Examples:

    ```
    const numbers = [1, 2, 3, 4, 5, 6];
    const evenNumbers = numbers.filter(function (num) {
        return num % 2 === 0;
    });
    console.log(evenNumbers); // [2, 4, 6]
    ```

    ```
    const users = [
    { name: 'John', age: 30 },
    { name: 'Jane', age: 25 },
    { name: 'Jim', age: 35 },
    ];
    const youngUsers = users.filter(function (user) {
    return user.age < 30;
    });
    console.log(youngUsers); // [{ name: "Jane", age: 25 }]
    ```

    .filter() also returns a new array and does not change the original array like .map(). You can use .filter(),
    to filter out the elements in the array and create a new array with only the elements you want.
