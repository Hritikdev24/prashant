import day from "./home.js"

function validator(a){
    if(a>18){
        return true;
    }else{
        return false;
    }
}


function gender(a){
    if(a=="male"){
        return "Mr"
    }else{
        return "Mis"
    }
}


function   cal(a){
         return a*3;
}



console.log(day());


function date(){
      const time=new Date();

     return time.toLocaleDateString()
}