//조원들을 정보로 하는 JSON 배열을 만들어 출력하기
//김동관 = 26살 유태혁 = 20살 다은 = 23살 해랑 = 27살
var fourTeam = [   
    {name: '김동관', age: 26},
    {name: '심다은', age: 23},
    {name: '해랑', age: 27},
    {name: '유태혁', age: 20},
    {name: '조충범', age: 25},
]

fourTeam.forEach(
    item => console.log("이름은 : " + item.name+ "이고 나이가 : "+item.age)
);


//Json배열 fourTeam안에도 함수를 선언할 수 있나?
//아 당연히 안되겠구나.