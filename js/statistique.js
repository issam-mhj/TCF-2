let totalReussits = [0, 0, 0, 0, 0, 0];
let tauxReussit = [0, 0, 0, 0, 0, 0];
let tentatives=[0,0,0,0,0,0];

const x = [
  {
    username: "ikram",
    NV: 0,
    tentative:[3,0,0,0,0,0],
    score: 80,
    fini: false,
  },
  {
    username: "issam",
    NV: 1,
    tentative:[1,2,0,0,0,0],

    score: 60,
    fini: false,
  },
  {
    username: "omar",
    NV: 2,
    tentative:[3,2,2,0,0,0],

    score: 70,
    fini: false,
  },
  {
    username: "mohamed",
    NV: 5,
    tentative:[1,1,1,1,1,2],

    score: 90,
    fini: true,
  },
  {
    username: "amin",
    NV: 5,
    tentative:[3,1,1,1,1,3],

    score: 40,
    fini: true,
  }                                                                                                                                  
];
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


function Tentative(){
    for(let i=0;i<6;i++){
        x.forEach((element)=>{
            tentatives[i]=tentatives[i]+element.tentative[i];
    })
}
}
Tentative();
console.log(tentatives);
function TotalReussite() {
  for (let i = 0; i < 6; i++) {
    x.forEach((element) => {
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
    tauxReussit[i] = (totalReussits[i] * 100) / x.length;
  }
}
TotalReussite() ;
tauxReussite();
console.log(totalReussits);
console.log(tauxReussit);
a1.innerText=tauxReussit[0];
a2.innerText=tauxReussit[1];
b1.innerText=tauxReussit[2];
b2.innerText=tauxReussit[3];
c1.innerText=tauxReussit[4];
c2.innerText=tauxReussit[5];
A1.innerText=tentatives[0];
A2.innerText=tentatives[1];
B1.innerText=tentatives[2];
B2.innerText=tentatives[3];
C1.innerText=tentatives[4];
C2.innerText=tentatives[5];


