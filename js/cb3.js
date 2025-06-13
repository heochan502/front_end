function sum(n1, n2) {
  return n1 + n2;
}

function sub(n1, n2) {
  return n1 - n2;
}

// const calc = function (cb, n1, n2) {
//   console.log(cb(n1, n2));
// };

const calc = (cb, n1, n2) => {
  const result = cb(n1, n2);
  console.log(result);
};

calc(sum, 10, 20); // 30  출력
calc(sub, 20, 12); // 8  출력

// function calc(cb, n1, n2) {
//   const result = cb(n1, n2);
//   console.log('결과 :', result);
// }
