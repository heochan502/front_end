//promise2.js
// ES5 생성자 함수, 인자로 콜백 함수
// 콜백 함수의 파라미터는 2개이다. 파라미터명은 아무거나해도 상관없으나.
// 보통 resolve, reject로 한다

// resolve -() 콜백 함수 ( 함수 주소 값)
// reject - 콜백 함수 ( 함수 주소 값)
// 함수 주소값 알면 호출할 수 있다.

const p = new Promise((resolve, reject) => {
  // resolve는 성공시 호출
  //resolve(성공성공); // then  메소드의 콜백함수가 호출
  //reject는 실팻시 호출
  resolve('성공성공'); // catch 메소드의 콜백 함수가 호출

  // reject는 실패시 호출
});
p.then((item) => {
  console.log('then : ', item);
  return '두번째'; // resolve('두번째');
})
.then (item => {
  console.log('2 then : ', item);
})


.catch((item) => {
  console.log('catch : ', item);
});
