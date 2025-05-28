const $screen = document.querySelector('#screen');
//
const $toggleButton = document.querySelector('#button');
let timeInterval;
let stopWatchOn = false;
let seconds = 0;

if ($screen && $toggleButton) {
  //   alert('연결 성공!');
  // 첫번째 argument(인자) : 문자열 (이벤트 이름)
  // 두전째 argyment(인자) : 함수 ( 함수 주소값) >> 콜백함수
  function clickBtn() {
    alert('호호');
  }
  //   $toggleButton.addEventListener('click', clickBtn);
  //   $toggleButton.addEventListener('click', function () {
  //     alert('하하');
  //   });

  $toggleButton.addEventListener('click', () => {
    // 똑같은 작업의 값을 계속 변동 시키는거
    stopWatchOn = !stopWatchOn;
    console.log('stopWatchOn: ', stopWatchOn);
  });
}

// toggleButton.addEventListener('click', () => {
//   stopWatchOn = !stopWatchOn;
//   toggleButton.innerHTML = stopWatchOn ? '■' : '▶';
// });
