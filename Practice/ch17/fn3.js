// 화살표 함수 Arrow Function 

const sum = (n1, n2) => {
    console.log('sum매소드 호출!!');
    console.log(`${n1} + ${n2} = ${n1 + n2}`);
    return n1+n2;
}
// sum (10,30);
// const result = sum(10,20);
// const result = sum;
// console.log ('result', result(10,30));


const copySum =sum;
console.log('result: ', copySum);

// 생략 가능한 것 : return, 중괄호, 소괄호
// 소괄호 생략 가능, 파라미터가 하나일 떄 
const abs= val =>{
    return val < 0 ? -val: val;
}
console.log('abs', abs(-10));
console.log('abs', abs(-11));

// 중괄호 생략 가능, 코드가 한 줄 일때 
const abs2 = val  => console.log('(2) val : ', val <0 ? -val : val);
abs2(-11);
abs2(3)


console.log('abs', abs(-10));
console.log('abs', abs(-11));

// return 생략가능, 코드가 한줄 일때 (중괄호도 없어야한다. )
const abs3 = val  => val <0 ? -val : val;
console.log(abs2(-11));
console.log(abs2(3)
