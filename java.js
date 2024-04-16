function bluring ()
{
    var inputs = document.getElementsByClassName("object");
    for (var x = 0; x < inputs.length; x++)
    {
        if (inputs[x].value == "")
        {
          inputs[x].style.borderColor = "red";
        }
        else
        {
          inputs[x].style.borderColor = "green";
        }
    }
}

function focusing (choice)
{
    choice.style.borderColor = "green";
}

function output ()
{
    var username = document.getElementById("userName").value;
    var password = document.getElementById("password").value;
    var age = document.getElementById("age").value;
    var gender = document.getElementById("gender").value;
    

    document.getElementById("USERNAME").innerHTML = "Username: " + username;
    document.getElementById("PASSWORD").innerHTML = "Password: " + password;
    document.getElementById("AGE").innerHTML = "Age: " + age;
    document.getElementById("GENDER").innerHTML = "Gender: " + gender;

    return false;
}

