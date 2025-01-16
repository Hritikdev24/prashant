function designation(a){
   if(a=="fresher"){
    return 340000;
   }else{
       return 1000000
   }
}

function  time(){

    const time=new Date();
    console.log(time);
    return time.toLocaleTimeString();
   

}

  export default  function day(){
    const time=new Date();
     console.log(time);
    const arr=["sunday","monday","tuesday","wednesday","thursday","friday","saturday"];
      return arr[time.getDay()];
}



function routing(){
    console.log("how are solve your life problem")
}


function run(){
console.log("you need to run form the bittom of the tree")
}



function    three(){
    console.log("the way you are solving the problem you need to work in same way");
}


function  sortArray(a){
 
a.sort((a,b)=>a-b);

}
