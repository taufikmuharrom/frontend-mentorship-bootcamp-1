// FUNCTIONS //

// calculate Area
function calculateArea(width, height) {
    return width * height;
}

console.log(calculateArea(10, 20));


//isEven
function isEven(number) {
    return number % 2 === 0;
}
console.log(isEven(10));

//isOdd
function isOdd(number) {
    return number % 2 !== 0;
}
console.log(isOdd(10));

// formatName
function formatName(firstName, lastName) {
    return `${firstName} ${lastName}`;
}
console.log(formatName("John", "Doe"));

// CONTROL FLOW //
/*
    TASK
    - score >= 90 => A
    - score >= 80 => B
    - score >= 70 => C
    - score >= 60 => D
    - score < 60 => E
*/
// Check Exam Score ( IF ELSE )
function examScore(score) {
    if(score >= 90){
        return "A";
    }else if(score >= 80){
        return "B";
    }else if(score >= 70){
        return "C";
    }else if(score >= 60){
        return "D";
    }else{
        return "E";
    }
}
console.log(examScore(10));

// Check Exam Score ( SWITCH )
function examScoreSwitch(score) {
    switch (score) {
        case 90:
            return "A";
        case 80:
            return "B";
        case 70:
            return "C";
        case 60:
            return "D";
        default:
            return "E";
    }
}
console.log(examScoreSwitch(10));

// Check Exam Score ( TERNARY )
function examScoreTernary(score) {
    return score >= 90 ? "A" : score >= 80 ? "B" : score >= 70 ? "C" : score >= 60 ? "D" : "E";
}
console.log(examScoreTernary(10));

// LOOP //
// 1. Print 1 to 10 using a for loop
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// 2. Print 1 to 10 using a while loop
let i = 1;
while (i <= 10) {
    console.log(i);
    i++;
}

// 3. Print 1 to 10 using a do-while loop
let j = 1;
do {
    console.log(j);
    j++;
} while (j <= 10);

// 4. Print even numbers from 2 to 20 using a for loop
for (let m = 2; m <= 20; m++) {
    if (m % 2 === 0) {
        console.log(m);
    }
}

// ARRAYS //

const fruits = ["apple", "banana", "orange", "grape", "mango"]

// 1. print them one by one
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// 2. Add a new fruit to the end of the array
fruits.push("watermelon");
console.log(fruits);

// 3. Remove the first fruit from the array
fruits.shift();
console.log(fruits);

// 4. Remove the last fruit from the array
fruits.pop();
console.log(fruits);

// 5. Find the index of a specific fruit
console.log(fruits.indexOf("banana"));

// 6. Check if an array contains a specific fruit
console.log(fruits.includes("banana"));

// 7. Sort the array in ascending order
fruits.sort();
console.log(fruits);

// 8. Sort the array in descending order
fruits.reverse();
console.log(fruits);

// 9. search for a specific fruit
console.log(fruits.find((fruit) => fruit === "banana"));

// 10. Filter the array to include only fruits with more than 5 characters
console.log(fruits.filter((fruit) => fruit.length > 5));

// 11. Different Map and foreach
// forEach: executes a provided function once for each array element, returns undefined
fruits.forEach((fruit) => console.log(fruit));
// map: creates a new array with the results of calling a function on every element, returns new array
// though we're not capturing the return value here, making it behave like forEach
fruits.map((fruit) => console.log(fruit));

// findMax
function findMax(numbers) {
    let max = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > max) {
            max = numbers[i];
        }
    }
    return max;
}
console.log(findMax([1, 2, 3, 4, 5]));
