// function takes an array as parameter and give the average of the odd numbers in the array
// put odd numbers in an array

function oddAverage(numbers) {
    const odds = [];
    for (const number of numbers) {
        if (Math.abs(number % 2) === 1) {  
            odds.push(number);
        }
    }

    if (odds.length === 0) {
        return 0; 
    }

    let sum = 0;
    for (const number of odds) {
        sum = sum + number;
    }
    const count = odds.length;
    const avg = sum / count;
    return avg;
}

const numbers = [42, 13, 58, 65, 81, 96, 7];
const avg = oddAverage(numbers);
console.log('average of the odd numbers is: ', avg);