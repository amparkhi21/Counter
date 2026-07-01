let count=10;
const timer=document.getElementById("count");
const interval=setInterval(function(){
  count--;
  timer.textContent=count;
  if(count==0){
    clearInterval(interval);
    timer.textContent="Time's Up!";
    timer.style.fontSize="80px";
  }
},1000);