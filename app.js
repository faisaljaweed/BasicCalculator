function button(num)
{
    var a=document.getElementById("result");
    a.value+=num;
}
function clearbtn(num)
{
    var clear=document.getElementById("result");
    clear.value="";
}
function equal()
{
    var b=document.getElementById("result");
    b.value=eval(b.value);
}