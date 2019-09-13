let arr = [];

for (let i = 0; i < 1000000; i++) {
  arr[i] = Math.floor(Math.random() * Math.floor(100));
}
function bubbleSort(arr) {
  for (var i = 0, endI = arr.length - 1; i < endI; i++) {
    var wasSwap = false;
    for (var j = 0, endJ = endI - i; j < endJ; j++) {
      if (arr[j] > arr[j + 1]) {
        var swap = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = swap;
        wasSwap = true;
      }
    }
    if (!wasSwap) break;
  }
  return arr;
}

const a = bubbleSort(arr);
console.log(a.length)
// //
// // const arr2 = [33, 50, 69, 99, 54, 10, 40];
// let counter = 0;
// try {
//
//   arr.forEach(num => {
//     console.log(num)
//     arr.forEach(val => {
//         counter++;
//     });
//   })
// }
// catch (e) {
//   console.log(e);
// }
// console.log(counter);
