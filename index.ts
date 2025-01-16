
 function add(a:number,b:number):number{
    return a+b;
 }

function age<t extends number>(a:t,b:t):number{
    return  add(a,b);
}