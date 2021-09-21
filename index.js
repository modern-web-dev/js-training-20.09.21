let myNumbers = [1, 3, 5, 6, 15];
const myThings = [1, true, 'Marek', {name: 'John'}, 77, [747.66, false]];

const sum1 = myNumbers
    .map(calibrateDeviceWith(1))
    .map(calibrateDeviceWith(2))
    .filter(onlyGreaterThanFive)
    .reduce(calculateSum, 0);

let sum2 = 0;
for (let i = 0; i < myNumbers.length; i++) {
    const currentNumber = myNumbers[i] + 1; // calibrate device
    const onlyGreaterThanFive = currentNumber > 5;
    if (onlyGreaterThanFive) {
        sum2 += currentNumber;
    }
}

(function (scope) {
    const a = 5;
    console.log(scope.document);
})(window);

assertObjectLike(undefined).isNotEmpty();

function assertObjectLike(testObject) {
    return {
        isNotEmpty() {
            return testObject != null;
        },

        isNotStringOfMarek() {
            return testObject !== 'Marek';
        }
    }
}

function calculateSum(sum, currentValue) {
    return sum + currentValue;
}

function calibrateDeviceWith(param) {
    return function (value) {
        return value + param;
    }
}

function calibrateDevice(value) {
    return value + 1;
}

function onlyGreaterThanFive(value) {
    return value > 5;
}

console.log(sum1);
console.log(sum2);

