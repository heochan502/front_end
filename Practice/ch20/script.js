const hearderNars = [
  { title: '얄코강좌는', link: '#about' },
  { title: 'HTML', link: '#html' },
  { title: 'CSS', link: '#css' },
  { title: '커리큘럼', link: '#curriculum' },
  { title: '문의하기', link: '#contact' },
];
// [] <- 이건 배열 , {} <- 이건 객체

// 아래와 같이 작성하면 문제 생길 일이 0
// const $headerNavUl= document.querySelector('header nav.hearder__Nav > ul')
const $headerNavUl = document.querySelector('header nav.header__nav > ul');

for (const item of hearderNars) {
  const $li = document.createElement('li');
  // $li.className = 'header__nav-item';
  $li.classList.add('header__nav-item');
  $li.innerHTML = `
  <a href="${item.link}">${item.title}</a>
  `;
  $headerNavUl.appendChild($li);
}

// about
const aboutCards = [
  {
    img: './images/about_1.svg',
    title: '빠른 강의',
    descs: ['군더더기 없는 진행으로', '여러분의 시간을 절약합니다.'],
  },
  {
    img: './images/about_2.svg',
    title: '손쉬운 학습',
    descs: ['강의 페이지를 활용해서', '편리하게 실습할 수 있습니다.'],
  },
  {
    img: './images/about_3.svg',
    title: '플레이그라운드',
    descs: ['강의를 위해 제작한 도구가', '반복 학습을 도와줍니다.'],
  },
];

const $aboutDiv = document.querySelector('#about > div.about');

let i = 1;
// for (const item of aboutCards) {
//   const $div = document.createElement('div');
//   $div.classList.add('about__card');
//   $div.innerHTML = `
//     <img class="about__icon" src="${item.img}" alt="">
//      <h2 class="about__title _${i++}">
//      ${item.title}
//           </h2>
//           <p class="about__text">
//            ${item.descs[0]} <br>
//            ${item.descs[1]}
//           </p>
//     `;
//   $aboutDiv.appendChild($div);
// }

aboutCards.forEach((item, idx) => {
  let desc = '';
  if (item.descs.length > 0) {
    desc = item.descs[0];
    for (i = 1; i < item.descs.length; i++) {
      desc += `<br>${item.descs[i]}`;
    }
  }

  const $div = document.createElement('div');
  $div.classList.add('about__card');
  $div.innerHTML = `    
    <img class="about__icon" src="${item.img}" alt="">
    <h2 class="about__title _${idx + 1}">
    ${item.title}
    </h2>
    <p class="about__text">
       ${desc}
    </p>
    `;
  $aboutDiv.appendChild($div);
});

const $currLiList = document.querySelectorAll(
  '#curriculum .curriculum__list > li'
);
const $currProBar = document.querySelector(
  '#curriculum .curriculum__progress .bar'
);

$currLiList.forEach((item, idx) => {
  item.addEventListener(
    'mouseenter',
    () => ($currProBar.style.width = `${200 * idx}px`)
  );
  item.addEventListener('mouseleave', () => ($currProBar.style.width = 0));
});

// const $contactTabs = document.querySelectorAll(
//   '#contact #ct_1, #contact #ct_2'
// );
const $contactTabs = document.querySelectorAll(
  '#contact input[name="contact"], #contact #ct_2'
);

console.log($contactTabs);
const $contactSlideCon = document.querySelector('#contact .contact__slide-con');

$contactTabs.forEach((item, idx) => {
  const marginLeft = [0, '-100vw'][idx];

  //위랑 같은 구문인데 위는 1줄로 끝냄
  // let marginLeft2;
  // if (idx==0){
  //   marginLeft2=0;
  // }
  // else if (idx ==1){
  //   marginLeft2 = '-100vw';
  // }
  item.addEventListener('click', () => {
    $contactSlideCon.style.marginLeft = marginLeft;
  });
});

const $menuBtn = document.querySelector(
  'header.header button.header__menu-btn'
);
const $headerNav = document.querySelector('header.header nav.header__nav');

$menuBtn.addEventListener('click', (e) => {
  // e.target.classList.toggle('on');
  $menuBtn.classList.toggle('on');
  // 메모리 쓰고 풀어줄려고 e 를 씀 안쓰면 메모리에서 계속 잡고 있음
  $headerNav.classList.toggle('active');
  e.stopPropagation(); //현재 이벤트가 부모 요소로 전파되는 것을 중단시킵니다.
  // 버블링 중지
  // 반대의 의미로 캡쳐링이 있는데 그건 부모에서 자식에게 퍼져나가는거
  // 내가 캡쳐링을 하겠다 ! 라고 해야 되는거
});
// $headerNav.addEventListener('click', () => {
//   $headerNav.classList.toggle('active');
// });
// console.log($menuBtn);

const $body = document.querySelector('body');
$body.addEventListener('click', () => {
  $menuBtn.classList.remove('on');
  $headerNav.classList.remove('active');
});
