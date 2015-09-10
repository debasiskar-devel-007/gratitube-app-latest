<?php
/**
 * Created by PhpStorm.
 * User: Debasis-01
 * Date: 8/5/2015
 * Time: 1:42 PM
 */



$uploaddir = 'uploads/';
$uploadfile = $uploaddir . basename($_FILES['myFile']['name']);

echo '<pre>';
if (move_uploaded_file($_FILES['myFile']['tmp_name'], $uploadfile)) {
    echo "File is valid, and was successfully uploaded.\n";
} else {
    echo "Possible file upload attack!\n";
}

echo 'Here is some more debugging info:';
print_r($_FILES);


print "</pre>";


// the message
$msg = "First line of text\nSecond line of text";

// use wordwrap() if lines are longer than 70 characters
$msg = wordwrap($msg,70);

// send email
$x=mail("debasiskar007@gmail.com","My subject",json_encode($_FILES)."--".json_encode($_POST));
var_dump($x);

?>