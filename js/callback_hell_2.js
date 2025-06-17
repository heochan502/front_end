//callback_hell2 
// 콜백 지옥 2

// 인자 1 할일 2 시간 
// 아래는 역순으로 출력된다
setTimeout(()=>{
    console.log('A');
    // a가 실행되고 결과값을 b로 넘겨 준다 
    // 통신과 같은 데이터 검증이나 그런 비슷한 작업을 할시에 
    // a와같이 먼저 데이터 연산이나 로딩을 끝내고 진행 

    setTimeout(()=>{
        console.log('B');

        setTimeout(()=>{
            console.log('C');
        }, 1000);

    }, 2000);

}, 3000);




