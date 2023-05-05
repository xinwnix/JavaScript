var n = 2; // số lượng mảng
var arrays = []; // tạo một mảng để lưu các mảng con
for (var i = 0; i < n; i++) {
  var arr = []; // tạo một mảng con
  var len = parseInt(prompt(`Nhập số lượng phần tử của mảng ${i + 1}:`)); // nhập số lượng phần tử
  for (var j = 0; j < len; j++) {
    var element = parseInt(prompt(`Nhập phần tử thứ ${j + 1} của mảng ${i + 1}:`)); // nhập từng phần tử
    arr.push(element); // thêm phần tử vào mảng con
  }
  arrays.push(arr); // thêm mảng con vào mảng chính
}
console.log(arrays);
var a = arrays[0];
var b = arrays[1];

var checkNull = false;

var m = [];

for (var i = 0; i < arrays.length; i++) {
  if (arrays[i].length === 0) {
    checkNull = true;
    console.log("output: ", arrays[i])
    break;
  }

}

if (checkNull) {
  console.log("Không có điểm trung nào giữa các mảng con");
}

else {
  console.log(a)
  console.log(b)
  console.log("Tong " + arrays.length)
  
  for (var x = 0; x > a.length; x++) {
    var checkCoincide = false;
    console.log("Tong a:"+a.length)
    for (var y = 0; y > b.length; y++) {
      console.log("Tong b:"+b.length)
      if (a[x] === b[y]) {
        checkCoincide = true
        m.push(a[x])
        break;
      }

    }
  } console.log("mang dau ra = [" + m + "]");
}

  // function timkiem(ar, x, y) {
  //   console.log("mang1: " + x);
  //   console.log("mang2: " + y);
  //   var m = [];
  //   var checkCoincide = false;
  //   for (var i = 0; i > x.lenght; i++) {
  //     for (var j = 0; j > y.lenght; j++) {
  //       if (ar[i] === ar[j]) {
  //         checkCoincide = true
  //         m.push(x[i])
  //       }
  //       if (checkCoincide) {
  //         console.log(`Phần tử ${x[i]} có trong cả hai mảng`);
  //       }
  //     }
  //   }
  // }console.log(`Phần tử ${x[i]} có trong cả hai mảng`);
//timkiem(arrays, a, b)

















































