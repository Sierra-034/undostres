const { superDigit, MustBeAnInteger } = require('./problema-03');

describe('Pruebas para superTest(n: int, rep: int)', () => {
    test('Bad Arguments', (done) => {
        expect(() => superDigit("hola", 3)).toThrow(MustBeAnInteger);
        expect(() => superDigit(123, "hola")).toThrow(MustBeAnInteger);
        expect(() => superDigit("123", 3)).toThrow(MustBeAnInteger);
        expect(() => superDigit(123, "3")).toThrow(MustBeAnInteger);
        expect(() => superDigit("123", "3")).toThrow(MustBeAnInteger);
        expect(() => superDigit(12.3, 3)).toThrow(MustBeAnInteger);
        expect(() => superDigit(123, 3.2)).toThrow(MustBeAnInteger);
        expect(() => superDigit(12.3, 3.2)).toThrow(MustBeAnInteger);
        done();
    });

    test('Examples given', (done) => {
        expect(superDigit(9875, 1)).toBe(2);
        expect(superDigit(148, 3)).toBe(3);
        done();
    });
});