
 function validate() 
{
    var username = document.getElementById("usernameId").value;
    var password = document.getElementById("passwordId").value;

    if (username == null || username != "neelp") 
    {
        alert("Incorrect Username");
        return false;
    }
    if (password == null || password != "welcome") 
    {
        alert("Incorrect password");
        return false;
    }
    alert('Login successful');
}
     
function checkSubmit()
{
    var x = document.getElementById("submitId").value;
    var username = document.getElementById("usernameId").value;
    var password = document.getElementById("passwordId").value; 


    if(username != "" && password != "")
    {
        document.getElementById("submitId").disabled = false;
    }
    else
    {
        document.getElementById("submitId").disabled = true;
    }
}    