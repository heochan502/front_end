//베열의 여러값을 하나의 값으로 변경할 때 사용
// 주로 모든 값 더하기 할 때 사용
const arr=[11,32,7,19,40,56, 57];

const result = arr.reduce(
    (prev, next)=> {
    console.log('prev: ', prev,', next', next);
    return prev + next;}  );

console.log('result: ', result);

console.log('----------------------');

// 초기값을 줄수가 있음 지금은 0 으로 주겠다고 하면 아래 처럼 0 으로 준다는거
// reduce(인자 , 초기값 ) 이런식인듯
const result2 = arr.reduce(
    (prev, next)=> {
    console.log('prev: ', prev,', next', next);
    return prev + next;} ,0);
    
console.log('result2: ', result2);
