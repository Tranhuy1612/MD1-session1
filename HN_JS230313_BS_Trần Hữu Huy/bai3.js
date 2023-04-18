let month = +prompt("nhập tháng");
let year = +prompt("nhập năm");
if (month >= 1 && month <= 12) {
    switch (month) {
        case 2: {
            if (year % 400 == 0 || (year % 4 == 0 && year % 100 != 0)) {
                alert("tháng, năm nhập có số ngày là:29");
            } else {
                alert("tháng, năm nhập có số ngày là:28");
            }
            break;
        }
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            {
                alert("tháng, năm nhập có số ngày là:31");
            }
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            {
                alert("tháng,năm nhập có số ngày là:30");
            }
            break;

    }
} else {
    alert("tháng năm sai kìa");
}