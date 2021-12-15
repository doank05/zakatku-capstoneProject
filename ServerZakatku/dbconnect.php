<?php
define('HOST','localhost');
 define('USER','root');
 define('PASS','');
 define('DB','dbzakatku');
 
 //membuat koneksi dengan database
 $con = mysqli_connect(HOST,USER,PASS,DB) or die('Koneksi tidak tersedia');
 ?>