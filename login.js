function validate()
{
var username=document.getElementById("username").Value;
var password=document.getElementById("password").Value;
if(username=="admin" && password=="password")
{
    alert("login successfully");
    return true;
}
else
{
    alert("login failed");
    return false;
}
}