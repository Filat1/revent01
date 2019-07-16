
const promise1 = new Promise(function (resolve, reject) {

  reject("The man doesnt want to keep his word");
  resolve("The man likes to keep his word");



});

console.log(promise1)