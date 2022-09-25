function clicked(sa)
{
    document.getElementById("screen").value+=sa;
}
function clearDisply(){
    document.getElementById("screen").value=""
}
function eqalClick(){
    var text=document.getElementById("screen").value
    var result=eval(text)
    document.getElementById("screen").value=result
}