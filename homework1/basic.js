// var server1 = ["김해리", "손예지", 43, null, true]; 
// var server2 = Array("신윤재", "유가희", 13);
// var server3 = new Array("이현주", "조충범", false, undefined);

// console.log('server1 : ', server1);
// console.log('server2 : ', server2);
// console.log('server3 : ', server3);

// server1.push(123);
// server2[server2.length] = "뭐 넣지";


// let str1 = 'server1에는 "';
// for (var item of server1) {
//     str1 += item + ', ';
// }


// str1 += '"이 들어있네요 ~';
// console.log(str1);

// let str2 = 'server2에는 "';

// for (var item in server2){
//     str2 += server2[item] + ', ';
// }
// str2 += '"이 (가) 들어있네요 ~';
// console.log(str2);

// let str3 = 'server3에는 "';
// server3.forEach( item => str3 += item + ', ');
// str3 += '"이 (가) 들어있네요 ~';
// console.log(str3);
// //이거 아이템 왜지?


var sopt = {
    name : 'OUR SOPT',
    slogan : 'WE LEAD OUR SOPT',
    part : ['plan', 'design', 'android', 'iOS', 'server'],
    number : 180,
    printName : function(){
        console.log('name : ', this.name)
    },
    printNum : function(){
        console.log('number : ', this.number)
    }
};

console.log('typeof sopt : ' + typeof sopt);

console.log('sopt : '+sopt);
console.log('sopt : ', sopt);
console.log('sopt : ' + JSON.stringify(sopt));

sopt.printName();
sopt.number = 190;
sopt.printNum();

