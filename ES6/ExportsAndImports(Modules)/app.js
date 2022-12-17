// app.js

// import ingredient.js
import ingredient from './ingredient';
import igd from './ingredient'; // default로 export된 것은 이름 바뀌어도 상관없음

// import utility.js
import { boil } from './utility';
import { fry } from './utility'; // default로 exprot되지 않았기 때문에 이름 바뀌면 안됨
