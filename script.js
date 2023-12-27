function inputSubmit(){
   let input=document.getElementById("input").value
 
 
 
    if (input===""){
     return
    }
    let inputSplit=input.split("")
    if (isNaN(Number(input))){
      
          checkThalaforareason(input,inputSplit.length)
 
    }
    else{
    
       let res =0;
       for(let i=0;i<=inputSplit.length-1;i++){
                         res+=Number(inputSplit[i])
                         console.log(Number(inputSplit[i]))
  
        }
           checkThalaforareason(input,res)
 
 
    }
 }
 function checkThalaforareason(inp,length){
    let result=document.getElementById("result")
    let sound1=document.getElementById("successful-sound")
    let sound2=document.getElementById("unsuccessful-sound")
    if(length===7){
       result.innerText=(inp)+"  is Thala For A Reason"
       result.style.display="block"
       sound1.play()
    }
  else {
     result.innerText=(inp)+"  is  not Thala For A Reason"
     result.style.display="block"
     sound2.play()
  }
 
 }