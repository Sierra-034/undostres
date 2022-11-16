const { substrings, alphabeticalOrder, imprimeNSubstring } = require("./problema-02");

describe('Tests for substrings', () => {
    test('Test a 2 length str', () => {
        const array = substrings('ab');
        expect(array.length).toBe(3);
        expect(array).toContain('a');
        expect(array).toContain('b');
        expect(array).toContain('ab');
    });

    test('Test a 3 length str', () => {
        const array = substrings('abc');
        expect(array.length).toBe(6);
        expect(array).toContain('a');
        expect(array).toContain('b');
        expect(array).toContain('c');
        expect(array).toContain('ab');
        expect(array).toContain('bc');
        expect(array).toContain('abc');
    });

    test('Test a 4 length str', () => {
        const array = substrings('dbac');
        expect(array.length).toBe(10);
        expect(array).toContain('a');
        expect(array).toContain('b');
        expect(array).toContain('c');
        expect(array).toContain('d');
        expect(array).toContain('db');
        expect(array).toContain('ba');
        expect(array).toContain('ac');
        expect(array).toContain('dba');
        expect(array).toContain('bac');
        expect(array).toContain('dbac');
    });
});

describe('Tests for alphabeticalOrder', () => {
    test('Test 3 one char str', () => {
        const substrings = ['c', 'a', 'b'];
        const ordered = alphabeticalOrder(substrings);
        expect(ordered).toEqual(['a', 'b', 'c']);
    });

    test('Test 3 more than one char str', () => {
        const substrings = ['abc', 'aab', 'cbb'];
        const ordered = alphabeticalOrder(substrings);
        expect(ordered).toEqual(['aab', 'abc', 'cbb'])
    });
});

describe('Tests for imprimeNSubstring', () => {
    test('Given example', () => {
        const character = imprimeNSubstring('dbac', 3);
        expect(character).toBe('c');
    });

    test('Given example, other index', () => {
        const character = imprimeNSubstring('dbac', 6);
        expect(character).toBe('a');
    })

    test('My Example', () => {
        const character = imprimeNSubstring('abc', 7);
        expect(character).toBe('b');
    });
});
