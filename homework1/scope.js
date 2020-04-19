function funcSope(){
    var v1 = 123;
    if(true){
        var v2 = 123;
        let ll = 'abc';
        console.log('let은 Block Scope, ll : ', ll);
    }
    //console.log('let은 Block Scope, ll : ', ll);
    console.log('var은 function Scope, v2 : ', v2);
}
funcSope();



/*
    Function Scope는 function 블록만을 범위로 인정한다.
    전역 함수 외부에서 생성한 변수는 모두 전역 변수

    - 위에 v2는 if문 안에 있어도 function블록만을 범위로 인정하기 때문에
      함수내의 최상위로 이동하여 선언된다(이걸 호이스팅이라고 한다.).

    Block Scope의 블록의 범위는 if, while,for, function 등의 중괄호 코드
    블록 내에서만 유효하다. 코드 블록 외부에서는 참조가 불가능하다.

    - 위의 ll은 if문 안에 있다. 따라서 해당 if문의 중괄호 외에서는 참조가 불가능하다.

*/
