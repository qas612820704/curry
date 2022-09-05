import curry from './curry';

test('it should be a function', () => {
    expect(curry).toBeInstanceOf(Function);
});

describe('curried', () => {
    test('curried is function', () => {
        const id = x => x;
        expect(curry(id)).toBeInstanceOf(Function);
    });

    test('curried 1 + 2 should be equal', () => {
        const add2 = (x, y) => x + y;
        expect(curry(add2)(1)(2)).toEqual(add2(1, 2));
    });

    test('curried (1 + 2) should be equal', () => {
        const add2 = (x, y) => x + y;
        expect(curry(add2)(1, 2)).toEqual(add2(1, 2));
    });

    test('curried 1 + 2 + 3 should be equal', () => {
        const add3 = (x, y, z) => x + y + z;
        expect(curry(add3)(1)(2)(3)).toEqual(add3(1, 2, 3));
    });

    test('curried (1 + 2) + 3 should be equal', () => {
        const add3 = (x, y, z) => x + y + z;
        expect(curry(add3)(1, 2)(3)).toEqual(add3(1, 2, 3));
    });

    test('curried 1 + (2 + 3) should be equal', () => {
        const add3 = (x, y, z) => x + y + z;
        expect(curry(add3)(1)(2, 3)).toEqual(add3(1, 2, 3));
    });

    test('curried spread argument should work', () => {
        const add = (...args) => args.reduce((a, b) => a + b);
        const curried = curry(add);
        expect(curried(1)(2)(3)()).toEqual(add(1, 2, 3));
    });
    test('curried partial spread argument should work', () => {
        const add = (...args) => args.reduce((a, b) => a + b);
        const curried = curry(add);
        expect(curried(1, 2)(3)()).toEqual(add(1, 2, 3));
    });

});
