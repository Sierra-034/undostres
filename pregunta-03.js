function func(n) {
    if (n == 0 || n == 1) return n;

    if (n % 3 != 0) return 0;

    return func(n / 3);
}

console.log("func(27)", func(27));