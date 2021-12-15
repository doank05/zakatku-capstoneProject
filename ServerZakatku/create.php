<?php

$con = mysqli_connect("localhost", "root","","dbzakatku" );

$judul = $_POST['judul'];
$isi = $_POST['isi'];
$date = $_POST['date'];
$gambar = $_POST['gambar'];

    $sql= "INSERT INTO berita(judul,isi,date,gambar)VALUES ('$judul','$isi','$date','$gambar')";
    
    $result = mysqli_query($con,$sql);
    
    if($result) {
        echo "Data Tersimpan";
    }
    else {
        echo "Gagal";
    }
    mysqli_close($con)
?>