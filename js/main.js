/*
-----------------------------------------------------------------------------------------------------------------------------------
CONTACT FORM - This function implements a JQuery and AJAX script to validate contact form email/message/body and then send an email
-----------------------------------------------------------------------------------------------------------------------------------
*/

$(document).ready(function() {
    var delay = 2000;
    $('.submit-button').click(function(e){
        e.preventDefault();
        var name = $('#name').val();
        if(name == ''){
            $('.message-box').html(
            '<span style="color:red;">Enter Your Name!</span>'
            );
            $('#name').focus();
            return false;
        }
    
        var email = $('#email').val();

        if(email == ''){
            $('.message_box').html(
            '<span style="color:red;">Enter Email Address!</span>'
            );
            $('#email').focus();
            return false;
        }
        if( $("#email").val()!='' ){
            if( !isValidEmailAddress( $("#email").val() ) ){
            $('.message_box').html(
            '<span style="color:red;">Provided email address is incorrect!</span>'
            );
            $('#email').focus();
            return false;
            }
        }
  
    var message = $('#message').val();
    if(message == ''){
        $('.message-box').html(
        '<span style="color:red;">Enter Your Message Here!</span>'
        );
        $('#message').focus();
        return false;
    } 
  
    $.ajax
    ({
        type: "POST",
        url: "../contact.php",
        data: "name="+name+"&email="+email+"&message="+message,
        beforeSend: function() {
        $('.message-box').html(
        '<img src="loader.gif" width="25" height="25"/>'
        );
        }, 
        success: function(data)
        {
        setTimeout(function() {
        $('.message-box').html(data);
        }, delay);
        }
        });
    });
  
 });

function isValidEmailAddress(emailAddress) {
    var pattern = /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
    return pattern.test(emailAddress);
};

/*
END CONTACT FORM
*/

/*
---------------------------------------------------------------------------------------------------------
NAVBAR COLLAPSE - This function checks if users has scrolled far enough for the nav bar to fade into view
---------------------------------------------------------------------------------------------------------
*/

$(window).scroll(function() {
    var about = $("#about").offset().top;   
    var skills = $("#skills").offset().top;
    var projects = $("#projects").offset().top; 
    var contact = $("#contact").offset().top; 
    var top_of_window = $(window).scrollTop();

    if (top_of_window >= about) {   
        $("#navbar").removeClass('navbar-trans').addClass('navbar-fixed');
        $('#navbar').css('visibility', 'visible');
    } else {   
        $("#navbar").removeClass('navbar-fixed').addClass('navbar-trans');
    }

    if (top_of_window >= about) {
        
    }
});

/*
END NAVBAR COLLAPSE
*/


// Resets contact form boxes upon submission
function resetForm() {
    document.getElementById('contactForm').reset();
}

// Check if screen is mobile or desktop
var isMobile = false; //initiate as false
// device detection
if ($(window).width() < 1000) {
    isMobile = true;
}

if (isMobile) {
    console.log('mobile');
    AOS.init({disable: true});
} else {
    console.log('desktop');
    AOS.init({disable: false});
}
