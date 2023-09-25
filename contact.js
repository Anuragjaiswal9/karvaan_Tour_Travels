function whatsapp()
{
   

    var fname = document.getElementById("firstname").value;
    var lname = document.getElementById("lastname").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var location = document.getElementById("location").value;
    var date = document.getElementById("date").value;
    var person = document.getElementById("person").value;

    var whatsappurl = "https://wa.me/918447399412?text=" + "Firstname: " + fname + "%0a"
    + "Lastname: " + lname + "%0a"

    + "Email: " + email + "%0a"
    
    + "Phone number: " + phone + "%0a"
    
    + "Location: " + location+ "%0a"
    
    + "Date: " + date + "%0a"

    + "Number of person: " + person + "%0a"


  window.open(whatsappurl,"_blank").focus();
    
    


}