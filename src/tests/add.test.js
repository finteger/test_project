const add = require('../functions/add.js');

test('Add 1 + 2 to equal 3',() =>{
    expect(add(1,2)).toBe(3);
});

test('Add 0 + 0 to equal 0',() =>{
    expect(add(0,0)).toBe(0);
});

test('Adds negative numbers',() =>{
    expect(add(-1,-2)).toBe(-3);
});