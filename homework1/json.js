var sopt = {
    name : 'OUR SOPT',
    slogan : 'WE LEAD OUR SOPT',
    part : ['plan', 'design', 'android', 'iOS', 'server'],
    number : 180,
    printName : function () {
        console.log('name : ', this.name )
    },
    printNum : function () {
        console.log('number : ', this.number )
    }
};

console.log('typeof sopt : ' + typeof sopt);

// + 와 , 의 차이가 무엇인지 직접 작성하면서 알아보세요 ~.~
// , 는 변수안의 할당된 값을 전달한다. + 는 변수안에 자료형 들을 전달한다(?)..정확한 차이를 까먹었다.
console.log('sopt : ' + sopt);
console.log('sopt : ', sopt);
console.log('sopt :' + JSON.stringify(sopt));
// JSON.stringify는 JSON객체를 String객체로 변환시켜준다.


sopt.printName();
sopt.number = 190;
sopt.printNum();


/* -------------------- */
/*   2. JSON 배열 실습    */
/* -------------------- */

var dogs = [
    { name: '식빵', family: '웰시코기', age: 1, weight: 2.14},
    { name: '콩콩', family: '포메라니안', age: 3, weight: 2.5},
    { name: '두팔', family: '푸들', age: 7, weight: 3.1}
];


console.log('dogs : ' + dogs);
console.log('dogs : ', dogs);
console.log('dogs :' + JSON.stringify(dogs));


dogs.forEach( 
    dog => console.log(dog.name+'이는 종이 '+dog.family+'이고, 나이가 '+dog.age+'세입니다 ~')
    );