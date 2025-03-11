function letter(){
    console.log`present`;
}

function receivesAFunction(letter){
    letter();
}
function returnsANamedFunction(){
    return function sayHiToThem(){
        console.log(`hello!`)
    }
}

function  returnsAnAnonymousFunction(){
    return function(){
        console.log (`goodbye`)
    }
}