//function fnChangeBorder(boxId)

//{document.getElementById(boxId).style.border = "solid #AA00FF";}

function submitbutton(){
      let isValidated=true;
  if (document.getElementById('firstName').value == 0){
    document.getElementById("firstName").style.border = "1px solid hsl(0, 100%, 74%)";
    document.getElementById("nameMessagei").style.display = "block";
    document.getElementById("fError").style.display = "block";
    document.getElementsByName('fName')[0].placeholder = ' ';
    }
    else{
document.getElementById("firstName").style.border="1px solid hsl(249, 10%, 26%)";
isValidated=true;
}
if (document.getElementById('lastName').value == 0){
    document.getElementById("lastName").style.border = "1px solid hsl(0, 100%, 74%)";
  document.getElementById("nameMessageii").style.display = "block";
  document.getElementById("lError").style.display = "block";
  document.getElementsByName('lName')[0].placeholder = ' ';
    isValidated= false;
    }
    else{
document.getElementById("lastName").style.border="1px solid hsl(249, 10%, 26%)";
isValidated=true;
}


if (document.getElementById('password').value == 0){
    document.getElementById("password").style.border="1px solid hsl(0, 100%, 74%)";
  document.getElementById("nameMessageiv").style.display = "block";
  document.getElementById("pError").style.display = "block";
  document.getElementsByName('password')[0].placeholder = ' ';
    isValidated= false;
    }
    else{
document.getElementById("password").style.border="1px solid hsl(249, 10%, 26%)";
isValidated=true;

}

    if( document.getElementById('email').value ==0)
    { document.getElementById("nameMessageiii").style.display = "block";
      document.getElementById("email").style.border = "1px solid hsl(0, 100%, 74%)";
     document.querySelector('input[type=email]').style.setProperty("--c", "hsl(0, 100%, 74%)");
     document.getElementsByTagName("input")[2].stylecolor = "red";
     document.getElementById("eError").style.display = "block";
     document.getElementsByName('email')[0].placeholder = 'email@example/com '; 
     
    }
    else if (!isEmail(emailValue)) {
      setErrorFor(email, " Not a valid Email");
            } else{
              setSuccessFor(email);
      document.getElementById("email").style.border="1px solid hsl(249, 10%, 26%)";
            }
            /* to validate the email*/
            function isEmail(email) {
      return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email);
    }}
  var form = document.getElementById("myForm");
function handleForm(event) { event.preventDefault(); } 
form.addEventListener('submit', handleForm);