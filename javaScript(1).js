let msg ='Hello'; //전역변수
console.log('함수 호출 전')
console.log(msg)

function sayHello(name){
    if(name){
        msg += ', ${name}';
    }
console.log('함수 내부')
//지역변수
    console.log(msg);
}

sayHello('Mike');
console.log('함수 호출 후')
