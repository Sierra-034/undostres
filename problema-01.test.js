const pb = require('./problema-01');

describe('Test de construcción', () => {
    test('llaves separadas', (done) => {
        expect(pb(1)).toContain("{}");
        expect(pb(2)).toContain("{}{}");
        expect(pb(3)).toContain("{}{}{}");
        done();
    });

    test('llaves anidadas', (done) => {
        expect(pb(1)).toContain("{}");
        expect(pb(2)).toContain("{{}}");
        expect(pb(3)).toContain("{{{}}}");
        done();
    });
});

describe('Pruebas para pb(n: int)', () => {
    test('Pair of parenthesis: 1', (done) => {
        expect(pb(1)).toContain("{}");
        done();
    });

    test('Pair of parenthesis: 2', (done) => {
        expect(pb(2)).toContain("{}{}");
        expect(pb(2)).toContain("{{}}");
        done();
    });

    test('Pair of parenthesis: 3', (done) => {
        expect(pb(3)).toContain("{{}{}}");
        expect(pb(3)).toContain("{{{}}}");

        expect(pb(3)).toContain("{{}}{}");
        expect(pb(3)).toContain("{}{{}}");

        expect(pb(3)).toContain("{}{}{}");

        done();
    });

    test('Pair of parenthesis: 4', (done) => {
        expect(pb(4)).toContain("{{}{}{}}");
        expect(pb(4)).toContain("{{{}{}}}");
        expect(pb(4)).toContain("{{{}}{}}");
        expect(pb(4)).toContain("{{}{{}}}");

        expect(pb(4)).toContain("{{}{}}{}");
        expect(pb(4)).toContain("{{{}}}{}");
        expect(pb(4)).toContain("{}{{}{}}");
        expect(pb(4)).toContain("{}{{{}}}");

        expect(pb(4)).toContain("{{}}{}{}");
        expect(pb(4)).toContain("{{}}{{}}");
        expect(pb(4)).toContain("{}{{}}{}");
        expect(pb(4)).toContain("{}{}{{}}");

        expect(pb(4)).toContain("{}{}{}{}");

        done();
    });
});