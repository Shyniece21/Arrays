var family = ["Annette", "Alex Jr.", "Alex III", "Alexis"];
//Using the pop array method removes the last element from the array.
family.pop();
console.log(family);


var number = [08, 06, 12, 04]
//Using the slice array method calls all elements in and between the index spots identified. In this case 1 through 4, which gives the output of 6, 12 and 4.
console.log(number.slice (1, 4));


var questions = [true, false, false, true];
//Using the unshift array method shifts elements to the beginning of the array. In this case an additonal true, false was added to the array after calling this method.
questions.unshift(true, false);
console.log(questions);
