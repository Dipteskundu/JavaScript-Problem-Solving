
function isLearYear2(year) {
    if (year % 100 !== 0 && year % 4 === 0) {
        return true;
    }
    else if (year % 400 === 0) {
        return true
    }
    else {
        return false;
    }
}

const isLeap = isLearYear2(2100);
const isLeap2 = isLearYear2(2400);
const isLeap3 = isLearYear2(1900);
const isLeap4 = isLearYear2(2052);
console.log(isLeap);