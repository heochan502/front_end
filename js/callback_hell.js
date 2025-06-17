//callback_hell콜백 지옥 

// 인자 1 할일 2 시간 
// 아래는 역순으로 출력된다
setTimeout(()=>{
    console.log('A')
}, 3000);

setTimeout(()=>{
    console.log('B')
}, 2000);



setTimeout(()=>{
    console.log('C')
}, 1000);