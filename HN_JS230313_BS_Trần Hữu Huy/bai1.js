function numberMax(a, b, c, d, e, f) {
    let max = a;
    if (b > max) {
        max = b;
    }
    if (c > max) {
        max = c;
    }
    if (d > max) {
        max = d;
    }
    if (e > max) {
        max = e;
    }
    if (f > max) {
        max = f;
    }
    return max;
}
console.log(numberMax(3, 5, 88, 99, 76, 8));