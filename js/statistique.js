let totalReussits = [0, 0, 0, 0, 0, 0];
let tauxReussit = [0, 0, 0, 0, 0, 0];
let tentatives=[0,0,0,0,0,0];

const user = JSON.parse(localStorage.getItem('users')) ;
let a1=document.getElementById("successRate1");
let a2=document.getElementById("successRate2");
let b1=document.getElementById("successRate3");
let b2=document.getElementById("successRate4");
let c1=document.getElementById("successRate5");
let c2=document.getElementById("successRate6");
let A1=document.getElementById("attemptsByLevel1");
let A2=document.getElementById("attemptsByLevel2");
let B1=document.getElementById("attemptsByLevel3");
let B2=document.getElementById("attemptsByLevel4");
let C1=document.getElementById("attemptsByLevel5");
let C2=document.getElementById("attemptsByLevel6");

const attempts=JSON.parse(localStorage.getItem("users"));
function Tentative(){
    for(let i=0;i<6;i++){
      attempts.forEach((element)=>{
        tentatives[i] += element.attemptsByLevel[`A${i+1}`];
    })
}
}
Tentative();
console.log(tentatives);
function TotalReussite() {
  for (let i = 0; i < 6; i++) {
    attempts.forEach((element) => {
        if(element.fini===true){
            totalReussits[i]++;
        return;
          }
      if (element.NV > i) {
        totalReussits[i]++;
      }

    });
  }
}
console.log(totalReussits[5])
function tauxReussite() {
  for (let i = 0; i < 6; i++) {
    tauxReussit[i] = (totalReussits[i] * 100) /attempts.length;
  }
}
TotalReussite() ;
tauxReussite();
console.log(totalReussits);
console.log(tauxReussit);
// a1.innerText=tauxReussit[0];
// a2.innerText=tauxReussit[1];
// b1.innerText=tauxReussit[2];
// b2.innerText=tauxReussit[3];
// c1.innerText=tauxReussit[4];
// c2.innerText=tauxReussit[5];
A1.innerText=tentatives[0];
A2.innerText=tentatives[1];
B1.innerText=tentatives[2];
B2.innerText=tentatives[3];
C1.innerText=tentatives[4];
C2.innerText=tentatives[5];
