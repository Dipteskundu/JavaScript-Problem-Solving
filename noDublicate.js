// array has some duplicate elements . task has to delete the duplicate element of the array

const friends = ['jony', 'rohit', 'partho', 'jony', 'rohit', 'rafi', 'toufik', 'partho'];
const numbers = [1, 5, 61, 5, 87, 7, 5, 81, 61];

function noDuplicate(array){
    const unique = [];
    for(const item of array){
        if(unique.includes(item) === false){
            unique.push(item);
        }
    }
    return unique;
}

const uniqueArray = noDuplicate(friends);
console.log(uniqueArray);

