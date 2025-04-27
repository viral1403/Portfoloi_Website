$(document).ready(function() {
  
    // Smooth Scroll for nav links
    $(".nav-link").on('click', function(event) {
      if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
  
        $('html, body').animate({
          scrollTop: $(hash).offset().top - 70
        }, 800);
      }
    });
  
    // Contact Form Validation
    $("#contactForm").on('submit', function(event){
      event.preventDefault();
      var name = $("#name").val();
      var email = $("#email").val();
      var message = $("#message").val();
  
      if(name && email && message){
        alert("Thank you, " + name + "! Your message has been sent.");
        $(this)[0].reset();
      } else {
        alert("Please fill all fields.");
      }
    });
  
  });
  