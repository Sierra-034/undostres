function imprimeNSubstring(str, n) {
    let func = compose(
        joinSubstringsFromArray,
        alphabeticalOrder,
        substrings
    );
    return func(str).at(n - 1);
}

const compose = (...fns) => (x) => fns.reduceRight((y, f) => f(y), x);

function substrings(str) {
    let pointerA = 0;
    let pointerB = 1;
    const subStrings = new Array();
    for (let i = 0; i < str.length; i++) {
        pointerA = 0;
        pointerB = i + 1;
        for (let j = pointerB; j <= str.length; j++) {
            subStrings.push(str.substring(pointerA, pointerB));
            pointerA++;
            pointerB++;
        }
    }

    return subStrings;
}

function alphabeticalOrder(strings) {
    return strings.sort((a, b) => a.localeCompare(b, 'es'));
}

function joinSubstringsFromArray(strings) {
    return strings.join('');
}

module.exports = {
    imprimeNSubstring,
    substrings,
    alphabeticalOrder,
};