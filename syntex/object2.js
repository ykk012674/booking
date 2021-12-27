function sum(){
    console.log(1+1);
    console.log(1+1);
    
}


var f = function (){
    console.log(1+1);
    console.log(1+2);
    
}

var a=[f];
a[0]();

var o = {
func:f
}
o.func();
// var roles={
//     'programmer' : 'egoing', 
//     'designer' : 'k8805',
//     'manager' : 'hoya'
// }
