//map을 사용하는 이유는? 똑같은 크기의 새로운 배열을 만들면서 새로운 값들로 세팅하고 싶을때
const arr=[11,32,7,19,40,56];
// 아래에서 각 배열에 +1 함 // item에서 새로운거 가져와서 그 item에 +1 하는걸 반복하는게 아래 구문
const mapArr = arr.map((item) =>item+3) ;

console.log('arr: ', arr);
//mapArr[0] = 10; 
console.log('mapArr: ', mapArr);
console.log('arr === mapArr : ', arr === mapArr);

const myArr ={
    0 : 11 ,
    1 : 32 ,
    2 : 7,
    3 : 19 ,
    4 : 40 ,
    5 : 56 ,
    length : 6,
    forEach: function(cb){
        for(let i=0; i< this.length; i++)
        {
            cb(this[i], i);
        }
    },
    map : function(cb){
     const temp = new Array(this.length);
     for (let i=0; i<this.length; i++)
     {
        temp[i]=cb(this[i], i);
     }
     return temp;
    }
};

const myMapArr = myArr.map(item => item +10);
console.log('myMapArr: ', myMapArr);
// console.log('myArr: ', myArr);