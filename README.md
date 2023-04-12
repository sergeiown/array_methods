# Frequently used array methods

## This project presents custom implementation of some array methods:

1.  **every()** is an array method that performs the specified function for each element of the array and returns true only if
    function returns true for all elements. If the function returns false for one or more elements, the every method will return
    false.

    The syntax of the .every() method is:

    ```
    array.every(function(currentValue, index, arr), thisValue)
    ```

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

##

2.  **filter()** is a JavaScript method that creates a new array containing only those elements of the original array that
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
        { name: 'Edgar', age: 25 },
        { name: 'Andrii', age: 35 },
        { name: 'Serhii', age: 45 },
    ];
    const youngUsers = users.filter(function (user) {
        return user.age < 30;
    });
    console.log(youngUsers); // [{ name: "Edgar", age: 25 }]
    ```

    .filter() also returns a new array and does not change the original array like .map(). You can use .filter(),
    to filter out the elements in the array and create a new array with only the elements you want.

##

3.  **forEach()** is an array method that allows you to go through all the elements of an array and perform
    a given action on each of them. This is useful when you need to perform some operation on each element of
    an array, but don't want to create a new array.

    The syntax of the .forEach() method is:

    ```
    array.forEach(function(currentValue, index, arr), thisValue)
    ```

    currentValue is the current element of the array.
    index - index of the current element in the array.
    arr - array, for which the method forEach is called.
    thisValue (optional) - value that will be used as this inside the function.

    An example of how to use .forEach():

    ```
    const numbers = [1, 2, 3, 4, 5];

    numbers.forEach(function (num) {
        console.log(num);
    });

    // Output:
    // 1
    // 2
    // 3
    // 4
    // 5

    ```

##

4. **map()** is a JavaScript method that creates a new array by converting each element in the
   original array with the specified function. The function passed to .map() takes three arguments:
   the current element, the element index, and the original array itself.

    The syntax of .map() is:

    ```
    array.map(function(currentValue, index, array) {
        // element transformation
    });
    ```

    Examples:

    ```
    const roots = numbers.map(function (num) {
        return Math.sqrt(num);
    });
    console.log(roots); // [1, 2, 3]
    ```

    ```
    const names = ['serhii', 'andrii', 'edgar'];
    const capitalizedNames = names.map(function (name) {
        return name.charAt(0).toUpperCase() + name.slice(1);
    });
    console.log(capitalizedNames); // [ 'Serhii', 'Andrii', 'Edgar' ]
    ```

    Note that .map() returns a new array and the original array is not changed. This means you can use
    .map() to create new arrays from the original arrays without changing the original arrays.

##

5. **reduce()** is a method that takes a function as an argument and executes it on each element of an
   array, reducing them to a single value. This is a useful method when you need to do some
   calculations or aggregate data in an array.

    The syntax of .reduce():

    ```
    array.reduce(function(accumulator, currentValue, currentIndex, array) {
        // code for the elements reduction
    }, initialValue);
    ```

    initialValue is an optional parameter, it specifies the initial value of the accumulator. If it is
    not specified, the first value of accumulator will be the first element of the array, and
    currentValue will be the second.

    Examples:

    ```
    const numbers = [1, 2, 3, 4];
    const sum = numbers.reduce(function (acc, num) {
        return acc + num;
    }, 0);
    console.log(sum); // 10
    ```

    ```
    const words = ['Hello', 'world'];
    const sentence = words.reduce(function (acc, word) {
        return acc + ' ' + word;
    });
    console.log(sentence); // "Hello world"
    ```

    ```
    const users = [
        { name: 'Andrii', age: 35 },
        { name: 'Edgar', age: 25 },
        { name: 'Serhii', age: 45 },
    ];
    const totalAge = users.reduce(function (acc, user) {
        return acc + user.age;
    }, 0);
    console.log(totalAge); // 105
    ```

    Like .map() and .filter(), .reduce() also returns a new array, but in this case it contains only one
    element - the result of the reduction. This method can be used for many different tasks, such as
    counting the sum, finding the maximum or minimum, calculating the average value, etc.

##

6. **some()** some is an array method that performs the specified function on each element of the array
   until it returns true for one of the elements. If true is returned for one of the elements, the some
   method will return true, otherwise it will return false.

    The syntax of the .some() method is:

    ```
    array.some(function(currentValue, index, arr), thisValue)
    ```

    currentValue - the current element of the array.
    index - index of the current element in the array.
    arr - the array for which the some method is called.
    thisValue (optional) - the value that will be used as this inside the function.

    An example of using .some():

    ```
    const numbers = [1, 2, 3, 4, 5];

    const result = numbers.some(function (num) {
        return num > 3;
    });

    console.log(result); // true
    ```

##

7. **sort()** is a method that sorts the elements of an array in place and returns
   the sorted array. By default, sort works in lexicographic order, that is it sorts
   elements as strings.

    The syntax of .sort() is:

    ```
    array.sort([compareFunction])
    ```

    The compareFunction is a function that takes two arguments and returns a number that
    determines how to sort the elements.

    Examples:

    ```
    // default sort (lexicographic order)
    const array = [10, 5, 40, 25, 1000];
    array.sort();
    console.log(array); // [10, 1000, 25, 40, 5]
    ```

    ```
    // sorting with comparison function
    const anotherArray = [10, 5, 40, 25, 1000];
    anotherArray.sort(function (a, b) {
        return a - b;
    });
    console.log(anotherArray); // [5, 10, 25, 40, 1000].
    ```

    Note that .sort() changes the original array, so if you want the original array intact,
    you should create a copy before sorting.

##

8. **splice()** is a method that is used to modify an existing array. It can be used to delete,
   insert, and replace array elements.

    The syntax of .splice() is:

    ```
    array.splice(startIndex, deleteCount, elementsToInsert)
    ```

    startIndex - index from which to start removing/inserting/replacing elements.
    deleteCount - the number of elements to remove.
    elementsToInsert - the elements to insert into the array instead of the deleted elements.

    Examples:

    ```
    // deleting elements
    const array = [1, 2, 3, 4, 5];
    array.splice(1, 2);

    console.log(array); // [1, 4, 5]
    ```

    ```
    // inserting elements
    const anotherArray = [1, 2, 3, 4, 5];
    anotherArray.splice(2, 0, 6, 7);

    console.log(anotherArray); // [1, 2, 6, 7, 3, 4, 5]
    ```

    ```
    // replacement of elements
    const oneMoreArray = [1, 2, 3, 4, 5];
    oneMoreArray.splice(2, 2, 6, 7);

    console.log(oneMoreArray); // [1, 2, 6, 7, 5]
    ```

    .splice() returns an array of deleted elements, so you can also use it to save deleted elements.
