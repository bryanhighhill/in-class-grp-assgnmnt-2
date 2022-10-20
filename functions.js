// # in-class-grp-assgnmnt-2
// **Add a code comment block describing your function before you start writing the code. All group members should participate in each question but you should switch drivers as you go.**

// Introductions: Your name and top super power.

// 0. Describe a function in your own words.

// 1. Write a function that logs "Hello World" when called.
function helloIt(){
    console.log('Hello, world!');
}
helloIt();

// 2. Write a function that takes in a number and logs "Hello World" that number of times (e.g. 2 would log "Hello World" two times). NOTE: When console logging the same thing twice, you'll see a little number to the left of the log rather than the text twice.
function hello(num1){
    for (let i=0; i < num1; i++){
        console.log('hello world');
    }
}
hello(9);

// 3. Write a function that takes in a number and returns true if it's greater than zero, false if less than 0.
function greaterTrue(x){
    if (x > 0) {
        return true;
    }
    if (x < 0) {
        return false;
    }
}
console.log(greaterTrue(5));
console.log(greaterTrue(-19));
console.log(greaterTrue(0));

// 4. Write a function that takes in a number (0 - 6) as an argument and returns the day of the week (dayOfWeekToString(0) would return "Sunday", dayOfWeekToString(2) would return "Tuesday"). NOTE: Use if / else if or switch for each day of the week within the function.
function dayOfWeekToString(num){
    switch (num) {
        case 0:
            console.log('Sunday');
            break;
        case 1:
            console.log('Monday');
            break;
        case 2:
            console.log('Tuesday');
            break;
        case 3:
            console.log('Wednesday');
            break;
        case 4:
            console.log('Thursday');
            break;
        case 5:
            console.log('Friday');
            break;
        case 6:
            console.log('Saturday');
            break;
        default:
            console.log('enter number 0 - 6');
        }
}

// if(num == 0){
//     console.log('sunday')
// } else if(num == 1) {
//     console.log('monday')
// }
// dayOfWeekToString(2);


// 5. Write a function that returns the current day of the week. NOTE: You will want to search for `getDay()` on MDN. (getDayOfWeek() would return 'Wednesday'). There may be a lot of overlap with the previous function, can you use the previous function to simplify your code? 
function getDayOfWeek(){
    const today = new Date('October 19, 2022');
    const day1 = today.getDay();
    return dayOfWeekToString(day1);
}
getDayOfWeek();


// Stretch (optional)
// 6. Write a function that logs the number of times it's been called to the console. (callCounter(); would log 'You have called this function 1 time'. Running it again would log 'You have called this function 2 times'.) This one is more challenging that it sounds but should generate some good conversation!
let count = 0
function callCounter() {
    count++;
    console.log(count)
}
callCounter();
callCounter();
callCounter();
callCounter();
callCounter();
callCounter();
callCounter();

// 7. Write a function that takes in an Array and a string. Return the number of times you found the string in the Array. countStringInArray('green', ['red', 'green', 'yellow', 'blue', 'green']) would return 2 


// NOTE: Use a loop rather than Array built in functions.