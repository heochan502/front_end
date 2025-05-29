const $screen = window.document.querySelector('#screen');
//document 이문서에서 선택자로 찾겠다 querySelector < 이게 찾겟다 뒤에 오는 (여기 안의 주소값)
// document에 앞에 window 생략되어있다 윈도우는 이화면을 뜻함
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
  // addEventListener 매소드임 // 인자는 2개이다 1개는 action // 뒤는 함수 주소값
  $toggleButton.addEventListener('click', () => {
    // 똑같은 작업의 값을 계속 변동 시키는거
    stopWatchOn = !stopWatchOn;
    console.log('stopWatchOn: ', stopWatchOn);
    $toggleButton.innerHTML = stopWatchOn ? '■' : '▶';
    // innerText는 컨텐츠를 바꿀때쓰는거 문자 그차제를 화면상에 보여줄때 변경해서 보여주는거고 태그조차 글자로 취급
    // innerTHML로하면 태그가 먹혀서 구문지여서 표출하게된다
    // 위구문은 innerText 해도되지만 태그가 들어가면 innerHTML로 해야한다
    // console.log('stopWatchOn: ', stopWatchOn);
    //$toggleButton.style.backgroundColor = !stopWatchOn ? 'tomato' : 'steelblue';
    // link(sytlesheet 앞에 연결)  inline style  앞의 3가지로 html 에 태그로 작성하면 html 에서 스타일 적용 가능
    $toggleButton.classList.toggle('stop-color');

    if (stopWatchOn) {
      // 첫번째 인자 : 콜백함수
      // 두번쨰 인자 : Number - ms
      // 특정 콜백 함수를 일정 시간 동안 실행하라 아래는 10초마다 실행해라
      timeInterval = setInterval(() => {
        seconds++;
        // padSart 앞자리가 비면 0으로 채우는거
        // padEnd에 다가하면 뒷자리에 0 으로 채움
        const mm = String(Math.floor(seconds / 6000) % 60).padStart(2, '0');
        const ss = String(Math.floor(seconds / 10) % 60).padStart(2, '0');
        const cs = String(seconds % 100).padStart(2, '0');
        $screen.innerText = `${mm}:${ss}:${cs}`;
      }, 10);
      // . 이없고 () 이거는 함수// .이 있으면 매소드
    } else {
      clearInterval(timeInterval);
      seconds = 0;
      $screen.innerText = '00:00:00';
    }
  });
}

// toggleButton.addEventListener('click', () => {
//   stopWatchOn = !stopWatchOn;
//   toggleButton.innerHTML = stopWatchOn ? '■' : '▶';
// });
