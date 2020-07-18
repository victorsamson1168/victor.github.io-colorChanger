//let x=document.getElementsByTagName("body");
//x.style.backgroundColor="pink";

 function getRandom(){
     
     let str="#";
     for(let i=0;i<6;i++)
         {
             str+=arr[Math.ceil(Math.random()*(15))];
         }
     document.body.style.backgroundColor=str;
     
     
     
 }
document.getElementById("clk").onclick=function()
{
    getRandom();
}




 let arr=[0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'];

