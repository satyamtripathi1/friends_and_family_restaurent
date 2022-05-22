function enlarge(idx){

    var x=document.getElementById(idx);
    document.getElementById("small-box").style.display="none";

    document.getElementById(idx+1).style.display="flex";


}
function cancel(idr){
    document.getElementById("small-box").style.display="flex";
    document.getElementById(idr).style.display="none";
// fnfn
}