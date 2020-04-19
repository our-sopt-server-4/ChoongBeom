//var는 Function Scope
var vv = 123;
var vv = 321;
console.log("vv : ", vv);

//let과 const는 Block Scope, 
//let과 const는 재선언이 불가능하다.
// ex). let a = 123; let a = 321; 은 불가능하다


let ll = 123;
//let ll = 321;
console.log("ll : ", ll);

const cc = 123;
//const cc = 321;
console.log("cc : ", cc);

var vv = 'abc';
vv = 'def';
console.log("vv : ", vv);

ll = 'abc';
console.log("ll : ", ll)

cc = 'abc'
console.log("cc : ", cc)


//let은 변수 값 재할당은 가능하지만 const는 재할당도 되지 않는다.
//또한 const는 변수 선언과 동시에 값을 초기화 해줘야 한다.
