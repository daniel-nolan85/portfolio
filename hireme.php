<?php
if ('' != htmlentities(addslashes($_POST['hireme']))) {
    print "Spam attempt!";
    exit;
}
$hiremeName = htmlentities(addslashes($_POST['hiremeName']));
$hiremeEmail = htmlentities(addslashes($_POST['hiremeEmail']));
$hiremeMessage = htmlentities(addslashes($_POST['hiremeMessage']));
header('Content-Type: application/json');
if ($hiremeName === ''){
    print json_encode(array('message' => 'Hireme name cannot be empty', 'code' => 0));
    exit();
}
if ($hiremeEmail === ''){
    print json_encode(array('message' => 'Hireme email cannot be empty', 'code' => 0));
    exit();
} else {
    if (!filter_var($hiremeEmail, FILTER_VALIDATE_EMAIL)){
        print json_encode(array('message' => 'Email format invalid.', 'code' => 0));
        exit();
    }
}
if ($hiremeMessage === ''){
    print json_encode(array('message' => 'Hireme message cannot be empty', 'code' => 0));
    exit();
}
$content="From: $hiremeName \nEmail: $hiremeEmail \nMessage: $hiremeMessage";
$recipient = "daniel@nolancode.com";
$mailheader = "From: feedback@nolancode.com \r\n";
$subject = "$hiremeName is interested in hiring me";
mail($recipient, $subject, $content, $mailheader) or die("Error!");
print json_encode(array('message' => 'Email successfully sent!', 'code' => 1));
exit();
?>