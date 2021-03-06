import takeFromArray from '../takeFromArray';

test('takeFromArray', () => {
    const arr1 = [ 'a', 'b', 'c' ];
    const int1 = 2;

    const result = takeFromArray(arr1, int1);

    expect(result).not.toBe(arr1);
    expect(result).toHaveLength(2);
    expect(result).toEqual([ 'a', 'b' ]);
});

test('takeFromArray with generator', () => {
    const gen1 = function* () {
        yield 'a';
        yield 'b';
        yield 'c';
    };

    const int1 = 2;

    const result = takeFromArray(gen1(), int1);

    expect(result).toHaveLength(2);
    expect(result).toEqual([ 'a', 'b' ]);
});
