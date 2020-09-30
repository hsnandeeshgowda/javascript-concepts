
debugger;

a = 10;
var b = 20;

function calc(z){
    
    b = 40;
    d = 50;
    c = 10;

    function subCalc(){
        var c = 20;
        d = d * z;
        return d;
    }

    return subCalc();

    var c;
}

console.log(calc(2));