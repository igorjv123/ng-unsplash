let arr = [];

for (let i = 0; i < 10000000; i++) {
  arr[i] = Math.floor(Math.random() * Math.floor(100));
}

const arr2 = [33, 50, 69, 99, 54, 10, 40];
let counter = 0;
try {

  arr.forEach(num => {
    arr.forEach(val => {
        counter++;
    });
  })
}
catch (e) {
  console.log(e);
}
console.log(counter);
