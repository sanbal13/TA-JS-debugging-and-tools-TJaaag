function test(message, callback){
    try{
        callback();
        console.log('✅', message);
    } catch(error) {
        console.error(error);
        console.log('❌', message);
    }
}

function expect(actual) {
    return {
        toEqual: function(expected) {
            if(actual !== expected) {
                throw new Error(`${actual} is not equal to ${expected}`);
            }
        },

       toBeEqual: function(expected) {
        if(typeof actual !== expected) {
            throw new Error(`${typeof actual} is not equal to ${expected}`);
        }
    }         
    }
}

function add(numA, numB) {
    return numA + numB;
}
test('Add 10 and 10 to give a number', () => expect(add(10, 10)).toBeEqual("number"));
test('Add 10 and 30 to give a number', () => expect(add(10, 10)).toBeEqual("number"));
test('Add 10 and alt to give a number', () => expect(add(10, 'alt')).toBeEqual("number"));
test('Add 10 and true to give a number', () => expect(add(10, true)).toBeEqual("number"));
test('Add 10 and undefined to give a number', () => expect(add(10, undefined)).toBeEqual("number"));

function mul(numA, numB) {
    return numA * numB;
}

test('Multiply 10 and 10 to give a number', () => expect(mul(10, 10)).toBeEqual("number"));
test('Multiply 10 and 30 to give a number', () => expect(mul(10, 30)).toBeEqual("number"));
test('Multiply 10 and alt to give a number', () => expect(mul(10, 'alt')).toBeEqual("number"));
test('Multiply 10 and true to give a number', () => expect(mul(10, true)).toBeEqual("number"));
test('Multiply 10 and undefined to give a number', () => expect(mul(10, undefined)).toBeEqual("number"));