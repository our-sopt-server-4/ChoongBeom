
function addNum(x, y){
    console.log(x + y);
}
addNum(2, 3);

var addStr = function(x, y){
    console.log(x + y);
}
addStr("함수" , "표현식");

var addBool = (x, y) => {
    console.log(x + y);
}

addBool(true, false);


/*
    함수 선언식과 함수 표현식

    함수 선언식의 예
    function test(){
        if(true)
        var a = "아악";
    }
    호이스팅에 영향을 받는다.

    함수 표현식의 예
    var funcName = (a, b) => {
        print(a+b);
        a+b;
    }
    자바의 람다식과 유사하다.

*/