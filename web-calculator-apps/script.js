// logical operation by compounded
var select=document.getElementById('select');
let result=document.getElementById('result');
var btn=document.getElementById('btn');
let test=true;
let annual=false;
let halfly=false;
let simpleinterest=false;
select.addEventListener('input',()=>{
    var selected=document.getElementById('select').value;

    if(selected=="select"){
      console.log("select");
    test=true;
    halfly=false;
    annual=false;
    }
    else if(selected=="annual"){
        console.log('annual');
           annual=true;
           halfly=false;
           test=false;
           simpleinterest=false;
    }
    else if(selected=="halfly"){
        console.log('halfly');
        halfly=true;
        annual=false;
        test=false;
        simpleinterest=false;
    }
    else if(selected=="simpleinterest"){
        halfly=false;
        annual=false;
        test=false;
        simpleinterest=true;
    }
})
btn.onclick=()=>{
    var principal =document.getElementById('p').value;
var year=document.getElementById('n').value;
var rate=document.getElementById('r').value;

if(annual==true){
    console.log("annual");
    
    if(principal==""){
        alert('please fill the p value');
        console.log(principal);
    }
    else if(year=="" || principal==null){
        alert('please fill the n value');
    }
   else if(rate=="" || principal==null){
        alert('please fill the r value');
    }
   
       // confirm('are you conform with the information ');
        console.log('p'+principal);
        console.log('n'+year);
        console.log('r'+rate);
        // total answer 
     annualcom(principal,rate,year);
     console.log(CI);
     result.textContent=CI;
}   
else if(halfly==true){
    console.log("halfly");
 
    
    if(principal==""){
        alert('please fill the p value');
        console.log(principal);
    }
    else if(year=="" || year==null){
        alert('please fill the n value');
    }
   else if(rate=="" || rate==null){
        alert('please fill the r value');
    }
   
       // confirm('are you conform with the information ');
        console.log('p'+principal);
        console.log('n'+year);
        console.log('r'+rate);
     halflycom(principal,rate,year);
     result.textContent=result_1;
}
else if(test==true){
    console.log("nothing");
    alert('please select the annual or halfly')
}
else if(simpleinterest==true){
console.log("simpleinterest");
simpleinterestwo(principal,year,rate);
result.textContent=SI;
}
}


{

   

}    

