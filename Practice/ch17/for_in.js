// 객체에 사용
const person2= {
    name : '김달순',
    age : 23,
    language:['한국어', '영어', '프랑스어'],
    education : {
        school: '한국대',
        major : ['컴퓨터공학', '전자공학'],
        grduated : true
    }

};
// for in 은 key(속성명)을 가져오는 함수이당 
for (const item in person2)
{
    console.log(item);
}


console.log('------------------')
//응용력 key: value 를 출력 해달라 
for (const item in person2)
    {
        // if (item ==="language"){
        //     for (let i=0; i<person2[item].length; i++)
        //     {
        //         console.log(item,':', person2[i]);
        //     }
        //     }
         console.log(item,':', person2[item]);
    }