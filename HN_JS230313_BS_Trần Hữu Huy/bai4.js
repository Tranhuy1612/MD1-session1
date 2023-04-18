// cách 1 dùng hàm sort
let arr = [3, 25, 38, 49, 12];
arr.sort(function (arr, b) { return b - arr });
console.log("số thứ tự giảm dần là :", arr);