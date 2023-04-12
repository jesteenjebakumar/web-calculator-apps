// p(1+1/100)pow(n)
// n is the power
     /*
        a=p(1+R/100)n
         */
        
              //  peryear(18000,2, 10);
           let CI=null ;
let r=null;
let p=null;
let n=null;
let SI=null
let result_1=null;
function annualcom( p,r,n){

    let principal=p;
    let year=n;
console.log("n value"+n);
    var amount=p*(1+r/100);
  console.log(amount);
 var principal_1 = parseFloat(p);
 var rate = parseFloat(r);
 var year_1 = parseFloat(year);
 console.log(year_1);
 console.log(rate);
 console.log(principal_1);
  CI = principal_1*(Math.pow((1+rate/100),year_1));
//   outputspan.innerHTML = ci;
// console.log("n value "+n);
// console.log("princlepal"+ principal_1 );
// console.log("rate"+ rate );
// console.log("year"+ year_1 );
// console.log(amount);
// amount=amount/n;
console.log(CI);
  CI=CI-principal;
  // CI=parseInt(CI);
   CI=Math.floor(CI)+principal_1;
console.log(CI);

}
// annualcom(18000,2,10)
function halflycom( p,r,n){

  
console.log("n value"+n);
let principal=p;
let year=n;
console.log("n value"+n);
var amount=p*(1+r/200);
// console.log(amount);
let principal_1 = parseFloat(p);
let rate = parseFloat(r);
let year_1 = parseFloat(n*2);
CI = principal_1*(Math.pow((1+rate/100),year_1));
// console.log(CI);
CI=CI-principal;
result_1=Math.floor(CI) +principal_1;
console.log(CI);
}
// halflycom(18000,2,10)
function simpleinterestwo(p,n,r){
  // p*n*R/100
   let formula=p*n*r;
   SI=formula/100+principal_1;
     alert("updated")

}
