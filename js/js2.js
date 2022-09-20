var t=100;
var x=1;
function demo() {
    var xyz = document.getElementById("demo");
    xyz.innerText += ("  " + t);
    x++;
    t--;
    if (x>=100) {
        clearInterval(at);
    }
}
var at=setInterval(demo,100);
