function func(x, y) {
    if (x == 0)
        return y;

    return func(x - 1, x + y);
}

console.log("func(4, 3)", func(4, 3));