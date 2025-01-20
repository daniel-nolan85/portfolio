<?php
if ('' != htmlentities(addslashes($_POST['subscribe']))) {
    print "Spam attempt!";
    exit;
}
$subscribeEmail = htmlentities(addslashes($_POST['subscribeEmail']));
header('Content-Type: application/json');
if ($subscribeEmail === ''){
    print json_encode(array('message' => 'Subscribe email cannot be empty', 'code' => 0));
    exit();
} else {
    if (!filter_var($subscribeEmail, FILTER_VALIDATE_EMAIL)){
        print json_encode(array('message' => 'Email format invalid.', 'code' => 0));
        exit();
    }
}
$content="From: $subscribeEmail \nReply-to: $subscribeEmail \n\n$subscribeEmail has subscribed to receive updates";
$recipient = "daniel@nolancode.com";
$mailheader = "From: feedback@nolancode.com \r\n";
$subject = "New Subscriber";
mail($recipient, $subject, $content, $mailheader) or die("Error!");
print json_encode(array('message' => 'Email successfully sent!', 'code' => 1));
exit();
?>