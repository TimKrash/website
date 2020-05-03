<?php $name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];
$formcontent="From: $name \n Message: $message";
$to = "tsk3@illinois.edu";
$subject = "Contact Form Message";
$from = 'Contact Form User';
$body = "From: $name\n E-Mail: $email\n Message:\n $message";

if ($_POST['submit']) {
    if (mail($to, $subject, $body, $from)) {
        echo "<span style='color:green; font-weight:bold;'>
            Thank you for contacting us, we will get back to you shortly.
            </span>";
    } else {
        echo "<span style='color:red; font-weight:bold;'>
            Sorry! Your form submission is failed.
            </span>";
    }
}
?>