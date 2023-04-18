function sapXep(array) {
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = 0; j < array.length; j++) {
            if (array[j] < array[j + 1]) {
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
}
let arr = [3, 25, 38, 49, 12];
sapXep(arr);
console.log(arr);
