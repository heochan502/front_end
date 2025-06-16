// 원본에서 필요한 아이템만 걸러서 새로운 배열을 만들고 싶을 때
const arr=[11,32,7,19,40,56];

const temp = [];

// const filterArr = arr.filter(item => item%2 === 0);
// console.log('arr: ', arr);
// console.log('filterArr: ', filterArr);


const myArr ={
    0 : 11 ,
    1 : 32 ,
    2 : 7,
    3 : 19 ,
    4 : 40 ,
    5 : 56 ,
    length : 6,
    // 이게 배열로 만들어주면서 배열에 데이터 박는 느낌이라
    // cb(this[i],i) 이걸 진행 해야 배열처럼 데이터를 넣는거라 
    // 아래에서 filter : 여기에 식을 넣고 계산을 하면 딱 그 계산에 맞는 값만 배열에 들어가고 
    // 데이터를 형성하게된다 즉  function(cb) <-이 콜백이 
    // 데이터를 1개 1개 입력하는 구문임 
    // 아래 자체만 실행하면 배열로써 만드는 것
    forEach: function(cb){
        for(let i=0; i< this.length; i++)
        {
            cb(this[i], i);
        }
    },

    filter : function(cb){
     const temp = [];
     for (let i=0; i<this.length; i++)
     {
        if (cb(this[i], i))
        {            
            temp.push(this[i]);
        }
     }
     return temp;
    }
};
const myFilterArr = myArr.filter(item => item%2 === 0);
console.log('myFilterArr: ', myFilterArr);
const myFilterArr2 = myArr.filter(item => item> 50);
console.log('myFilterArr2: ', myFilterArr2);
// console.log('filterArr: ', filterArr);





// temp.push(1);
// temp.push(2);
// temp.push(3);

// console.log(temp);