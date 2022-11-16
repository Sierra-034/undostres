class MustBeAnInteger extends Error {
    constructor(message) {
        super(message || 'Arguments must be Integers');
    }
}

function superDigit(n, rep) {
    if (!Number.isInteger(n) || !Number.isInteger(rep))
        throw new MustBeAnInteger()
    const numbers = String(n).repeat(rep).split('').map(Number);

    function reducer(array) {
        if (array.length == 1) return Number(array);
        const reduced = array.reduce((prev, curr) => prev + curr, 0);
        const separated = String(reduced).split('').map(Number);
        return reducer(separated);
    }

    return reducer(numbers);
}

module.exports = {
    superDigit,
    MustBeAnInteger,
};
