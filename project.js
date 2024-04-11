function navHome(){
    const element = document.getElementById("home");
    element.scrollIntoView({behavior:'smooth'});
}
function navAbout(){
    const element = document.getElementById("aboutMe");
    element.scrollIntoView({behavior:'smooth'});
}
function navPort(){
    const element = document.getElementById("portfolio");
    element.scrollIntoView({behavior:'smooth'});
}
function navContact(){
    const element = document.getElementById("contactMe");
    element.scrollIntoView({behavior:'smooth'});
}
function contactButton(){
    const element = document.getElementById("contactMe");
    element.scrollIntoView({behavior:'smooth'});
}
function emailSend(){
    var name = document.getElementById('name');
    var email = document.getElementById('email');
    var phone = document.getElementById('phone');
    var inquiry = document.getElementById('inquiry');
    var messageBody = "Name: " + name + "<br> Email: " + email + "<br> Phone Number: " + phone + "<br> Inquiry: " + inquiry;
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "anneliesdevadder.adv@gmail.com",
        Password : "A4DCCAB7F23E7FF9D3482DEDC76AD5A1F3EC",
        To : "anneliesdevadder.adv@gmail.com",
        From : document.getElementById("email").value,
        Subject : "New Contact Form Inquiry",
        Body : messageBody
    }).then(
      message => alert("Message Sent Successfully")
    );
}