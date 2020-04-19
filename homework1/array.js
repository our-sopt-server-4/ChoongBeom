var server1 = ["김해리", "손예지", 12, null, true];
var server2 = Array("신윤재", "유가희", 13);
var server3 = new Array("이현주", "조충범", false, undefined);

console.log('server1 : ', server1);
console.log('server2 : ', server2);
console.log('server3 : ', server3);

server1.push(123);
server2[server2.length] = "뭐 넣지"
server3[99] = "server3의 길이는 얼마일까요?";

console.log('server1 : ', server1);
console.log('server2 : ', server2);
console.log('server3 : ', server3);

let str1 = 'server1에는 "';
for (var item of server1) {
    str1 += item + ', ';
}
str1 += '"이 들어있네요 ~';
console.log(str1);

// for - of 는 엘리먼트를 하나씩 가져온다.
function test(){
    let str2 = 'server2에는 "';
    for (var i in server2) {
        str2 += server2[i] + ', ';
    }
    str2 += '"이(가) 들어있네요 ~';
    console.log(str2);
    console.log(i);   
}

//for in 은 인덱스를 하나씩 가져온다.
//var 는 function Scope로 for()안에서 var i가 선언되었지만 전역변수로 선언되었다.
//하지만 function안에서 선언해주니 그 안에 최상위(?)에서 선언되게 되지만 밖에서는 접근할 수 없다.


let str3 = 'server3에는 "';
server3.forEach( item => str3 += item + ', ');
str3 += '"이(가) 들어있네요 ~';
console.log(str3);

//forEach는 엘리번트를 하나씩 가져온다. 그리고 callback함수를 등록할 수 있다(이건 무슨뜻일까?)




