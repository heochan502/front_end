//promise3.js
// ES5 생성자 함수, 인자로 콜백 함수
// 콜백 함수의 파라미터는 2개이다. 파라미터명은 아무거나해도 상관없으나.
// 보통 resolve, reject로 한다

// resolve -() 콜백 함수 ( 함수 주소 값)
// reject - 콜백 함수 ( 함수 주소 값)
// 함수 주소값 알면 호출할 수 있다.
// 콜백지옥에 빠진 callback_hell2.js를 promise를 이용하여
// 콜백지옥에서 해방

// function fnA() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log('A');
//       resolve('B');
//     }, 3000);
//   });
// }

// function fnB(item) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log('B');
//       resolve('C');
//     }, 2000);
//   });
// }

// function fnC(item) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log(item);
//     }, 2000);
//   });
// }

const p = new Promise((resolve, reject) => {
 setTimeout( ()=>{
  console.log('A');
  resolve('B');
 },3000);

});

p.then(item =>{
  return new Promise ((resolve)=>{
    setTimeout(()=>{

      console.log(item);
      resolve('C');
    },2000)
  });
}).then(item =>{
  setTimeout(()=>{
    console.log(item);
  },1000);
})

// fnA()
//   .then((item) => fnB(item))
//   .then((item) => fnC(item));
