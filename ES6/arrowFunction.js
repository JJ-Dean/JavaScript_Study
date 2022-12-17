// 기존 함수
function cook(ingredient) {
  console.log('boil ' + ingredient);
}
cook('토마토'); // boil 토마토

// 화살표 함수
const cook = (ingredient) => {
  console.log('boil ' + ingredient);
};
cook('마늘'); // boil 마늘

// 화살표 함수 줄이기
const cook = (ingredient) => console.log('boil' + ingredient);
