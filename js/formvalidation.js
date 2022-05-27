function validateform() {
    var a = document.getElementById("t1").value;
    var exp = /^[A-Za-z]+$/;

    if (a == "") {
        document.getElementById("msg").innerHTML = "** please fill First Name";
        return false;
    }
    else
    {
        document.getElementById("msg").innerHTML = " ";
        return true;
    }
    if (a.length > 20) {
        document.getElementById("msg").innerHTML = "** your names length is too long";
        return false;
    }
    else
    {
        document.getElementById("msg").innerHTML = "";
        return true;
    }

    if (exp.test(a)==false) {
        document.getElementById("msg").innerHTML = "*digits are not allowed in the name field";
        return false;
    }
    else {
        document.getElementById("msg").innerHTML = " ";
        return true;
    }
    

}
//    validation for last name


function lnamevalidate() {
    var b = document.getElementById("t2").value;
    var exp1 = /^[A-Za-z]+$/;

    if (b == "") {
        document.getElementById("msg1").innerHTML = "** please fill Last Name";
        return false;
    }
    else
    {
        document.getElementById("msg1").innerHTML = " ";
        return true;
    }


    if (b.length > 20) {
        document.getElementById("msg1").innerHTML = "** your names length is too long";
        return false;
    }
    else
    {
        document.getElementById("msg1").innerHTML = " ";
        return true;
    }

    if (exp1.test(b)==false) {
        document.getElementById("msg1").innerHTML = "*digits are not allowed in the name field";
        return false;
    }
    else {
        document.getElementById("msg1").innerHTML = " ";
        return true;
    }

}

function addressvalidation() {
    var c = document.getElementById("t3").value;


    if (c == "") {
        document.getElementById("msg3").innerHTML = "** this field is required";
        return false;
    }
    else
    {
        document.getElementById("msg3").innerHTML = " ";
        return true;
    }

}

function cityvalidation() {
    var d = document.getElementById("t4").value;


    if (d == "") {
        document.getElementById("msg4").innerHTML = "** this field is required";
        return false;
    }
    else
    {
        document.getElementById("msg4").innerHTML = " "; 
        return true
    }

}

function statevalidation() {
    var e = document.getElementById("t5").value;


    if (e == "") {
        document.getElementById("msg5").innerHTML = "** this field is required";
        return false;
    }
    else
    {
        document.getElementById("msg5").innerHTML = " ";   
        return true;
    }

}

function emailvalidation() {
    var expe = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var f = document.getElementById("t6").value;
    if (f == "") {
        document.getElementById("msg6").innerHTML = "** Email Id is required";
        return false;
    }
    else
    {
        document.getElementById("msg6").innerHTML = " ";
        return true;
    }

    if (expe.test(f)==false) {
        document.getElementById("msg6").innerHTML = "*Invalid email  id";
        return false;
    }
    else {
        document.getElementById("msg6").innerHTML = " ";
        return true;
    }

}

function checkboxvalidation()
{
    var check=document.getElementById(" ")
}



function phonevalidation() {
    var expphone = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    var g = document.getElementById("t7").value;
    if (g == "") {
        document.getElementById("msg7").innerHTML = "** Phone Number is required";
        return false;
    }
    else
    {
        document.getElementById("msg7").innerHTML = " ";
        return true;
    }

    if (g.match(expphone)) {
        return true;
    }
    else {
        document.getElementById("msg7").innerHTML = "*Invalid Phone number";
        return false;
    }

}


function zipcodevalidation() {
    var expzip = /^\d{4}$|^\d{6}$/;
    var h = document.getElementById("zipid").value;
    if (h == "") {
        document.getElementById("zipmsg").innerHTML = "** Zip code is required";
        return false;
    }
    else
    {
        document.getElementById("zipmsg").innerHTML = " ";
        return true;
    }

   if(expzip.test(h)==false)
   {
       document.getElementById("zipmsg").innerHTML="** invalid zip code";
       return false;
   }
   else
   {
        document.getElementById("zipmsg").innerHTML=" ";
        return true;
   }

    // if (h.match(expzip)) {
    //     return true;
    // }
    // else {
    //     document.getElementById("zipmsg").innerHTML = "*Invalid zip code";
    //     return false;
    // }

}

function dropdownvalidation() {
    var dropv = document.getElementById("dropid").value;


    if (dropv == "") {
        document.getElementById("dropmsg").innerHTML = "** this field is required";
        return false;
    }
    else
    {
        document.getElementById("dropmsg").innerHTML = " ";
        return true;
    }

}

function feedback()
{

    var fb = document.getElementById("feedbackid").value;
    if (fb.length<5) {
        document.getElementById("feedbackmsg").innerHTML = "** length of msg is too short";
        return false;
    }
    else
    {
        
        document.getElementById("feedbackmsg").innerHTML = " ";
        return true;
    }

}

function suggestionvalidation()
{

    var s = document.getElementById("sid").value;
    if (s.length<5) {
        document.getElementById("smsg").innerHTML = "** length of msg is too short";
        return false;
    }
    else
    {
        
        document.getElementById("smsg").innerHTML = " ";
        return true;
    }

}

function rediobuttonvalidation()
{
   var radio=document.getElementById("r1");
   var radio1=document.getElementById("r2");
   var radio2=document.getElementById("r3");

   if(radio.checked==true || radio1.checked==true || radio2.checked==true)
   {
        document.getElementById("radiomsg").innerHTML=" ";

        return true;

   }
   else 
   {
      
       document.getElementById("radiomsg").innerHTML="Gender should be selected";
       return false;
   }
}


function checkcheckbox() {

    if ($('input[name=checkc]:checked').length == 0) {
        document.getElementById("check").innerHTML = "** this field is required";
       
        return false;
    }
    else {
        document.getElementById("check").innerHTML = " ";
        return true;
    }
}


    





function submitrequest() {
    var submitbtn = document.getElementById("btn");
    if (validateform() || lnamevalidate() || addressvalidation() || cityvalidation() || statevalidation() || emailvalidation() || phonevalidation() || zipcodevalidation() || dropdownvalidation() ||feedback()||suggestionvalidation()||rediobuttonvalidation()||checkcheckbox()) 
    {
        submitbtn.disabled = false;
        return true;
    }
    else {
        submitbtn.disabled = true;
        return false;
    }
}
