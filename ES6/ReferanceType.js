// 객체, 배열 => 참조형 자료 타입
// i) 일반적인 방법으로 복사
// 값을 복사하는 것이 아닌 포인터(값을 가르키는 주소)를 복사한다.
const first = {
  name: '유준재',
};

const second = first;
first.name = 'Dean';

console.log(second); // { name: 'Dean' }

// ii) 스프레드 연산자를 이용한 복사
// 값을 그대로 복사한다.
const firstIngredient = {
  name: 'tomato',
};

const secondIngredient = {
  ...firstIngredient,
};

firstIngredient.name = 'onion';

console.log(secondIngredient); // { name: 'tomato' }
