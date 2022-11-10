function func(n) {
    if (n == 4)
        return n;

    return 2 * func(n + 1);
}

console.log("func(2)", func(2));