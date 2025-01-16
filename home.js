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

