<?php
if ('' != htmlentities(addslashes($_POST['daniel']))) {
    print "Spam attempt!";
    exit;
}
$first = htmlentities(addslashes($_POST['first']));
$last = htmlentities(addslashes($_POST['last']));
$email = htmlentities(addslashes($_POST['email']));
$message = htmlentities(addslashes($_POST['message']));
$subject = htmlentities(addslashes($_POST['subject']));
header('Content-Type: application/json');
if ($first === ''){
    print json_encode(array('message' => 'First name cannot be empty', 'code' => 0));
    exit();
}
if ($last === ''){
    print json_encode(array('message' => 'Last name cannot be empty', 'code' => 0));
    exit();
}
if ($email === ''){
    print json_encode(array('message' => 'Email cannot be empty', 'code' => 0));
    exit();
} else {
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)){
        print json_encode(array('message' => 'Email format invalid.', 'code' => 0));
        exit();
    }
}
if ($subject === ''){
    print json_encode(array('message' => 'Subject cannot be empty', 'code' => 0));
    exit();
}
if ($message === ''){
    print json_encode(array('message' => 'Message cannot be empty', 'code' => 0));
    exit();
}
$content="From: $first $last \nEmail: $email \nMessage: $message";
$recipient = "daniel@nolancode.com";
$mailheader = "From: feedback@nolancode.com \r\n";
mail($recipient, $subject, $content, $mailheader) or die("Error!");
print json_encode(array('message' => 'Email successfully sent!', 'code' => 1));
exit();
?>