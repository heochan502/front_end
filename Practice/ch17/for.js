const myArray = ['A', 'B', 'C','D'];



//  of 는 배열에서만 가능함 
for (const item of myArray)
{
    console.log(item);
}

const myObj = {
    name : '홍길동',
    age : 22
};

// in 은 객체에서 사용가능
for (const i in myObj)
{
    console.log(i);
}

// 유사 배열

const myArray2 = {
    0:'A',
    1:'B',
    2:'C',
    3:'D',
    length: 4,

};

for (let i=0; i<myArray2.length; i++)
{
    console.log('for', myArray2[i]);
}

const myArray2Iterable= Array.from(myArray2); // 유사배열을 진짜 배열로 만든다.
//에러 발생 myArray2 is not Iterable 
// for (const item of myArray2)
// {
//     console.log(item);
// }
for(const item of myArray2Iterable)
{
    console.log(item);
}