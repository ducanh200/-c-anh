var obj={
    name:'Nguyễn Đức Anh',
    age:18,
    mark:6,
    girlfriends:['Thúy Kiều ','Thúy Vân','Nọc Trinh'],
    eat:function (){
        console.log("đang ăn cơm...");
    }
};
console.log(obj.name);
obj.name='Kim Trọng';
console.log(obj.name);
for(var i=0;i<obj.girlfriends.length;i++){
    console.log(obj.girlfriends[i]);
}
obj.eat();
var f=0;
function demo() {
    var x = document.getElementById("abc");
// x,innertext="xin chao  các con gà";
   // x.innerHTML = '<i>Hello Wolrld!</i>';
  //  x.style.color="red";
  //  x.style.fontSize=f+'px';
    x.style.transform='rotate('+f+'deg)';
    f+=100;
}
function QuayTron() {
    setInterval(demo, 1);
}
var m=9,s=59;
function timer(){
    var min=document.getElementById("min");
    var sec=document.getElementById("sec");
    min.innerText=m;
    sec.innerText=s;
    s--;
    if(s<0){
        s=59;
        m--;
    }
    if(m<0){
        clearInterval(si);
    }
}
var si;
function starttimer(){
    si=setInterval(timer,1000);
}

