
// function cook(){
//     var a = prompt("Enter your desire dish");
//     alert("bring" + a);
// }
// cook();

// var num1 = prompt("Enter first num");
// var num2 = prompt("Enter sec num");
// var num3 = prompt("Enter third num"); 
// function calc(num1, num2, num3){
//     var b = (+num1 + +num2)*num3 ;
//     b = parseInt(b);
//     if(b = Number.isNaN){
//         alert("Something went wrong, provide a valid number");
//     }
//     else{
//         alert(b);
//     }
// }
// calc(num1, num2, num3);

// var num1 = prompt("Enter first num");
// var num2 = prompt("Enter sec num");
// var num3 = prompt("Enter third num"); 
// function calc(num1, num2, num3){
//     var b = (+num1 + +num2)*num3 ;
    
//     if(b/b != 1){
//         alert("Something went wrong, provide a valid number");
//     }
//     else{
//         alert(b);
//     }
// }
// calc(num1, num2, num3);


var ingd1 = ['egg','salt','sugar'];
var ingd2 = ['water','egg','milk'];
var ingd3 = ['flour','sugar','milk'];
var allingd = [];

function combineIngrd(ing1, ing2, ing3){
    for(var i = 0; i < ing1.length; i++){
        if(allingd.indexOf(ing1[i]) == -1){
            allingd.push(ing1[i]);
        }
    }
        for(var i = 0; i < ing2.length; i++){
        if(allingd.indexOf(ing2[i]) == -1){
            allingd.push(ing2[i]);
        }
    }
        for(var i = 0; i < ing3.length; i++){
        if(allingd.indexOf(ing3[i]) == -1){
            allingd.push(ing3[i]);
        }
    }
    alert(allingd);
}
combineIngrd(ingd1, ingd2, ingd3);