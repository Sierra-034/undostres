function parentesisBalanceados(n) {
    const array = new Array();
    const str = new Array(2 * n);

    function gen(pos, op, cl) {
        if (cl == n) {
            array.push(str.join(''));
            return
        }

        if (op > cl) {
            str[pos] = "}";
            gen(pos + 1, op, cl + 1);
        }

        if (op < n) {
            str[pos] = "{";
            gen(pos + 1, op + 1, cl);
        }
    }

    gen(0, 0, 0);
    return array;
}

module.exports = parentesisBalanceados;