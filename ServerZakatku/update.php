<?php
if($_SERVER['REQUEST_METHOD']=='POST'){
		//MEndapatkan Nilai Dari Variable 
		$id = $_POST['id'];
		$judul = $_POST['judul'];
		$isi = $_POST['isi'];
		$date = $_POST['date'];
		$gambar = $_POST['gambar'];
		
		//import file koneksi database 
		require_once('dbconnect.php');
		
		//Membuat SQL Query
		$sql = "UPDATE berita SET judul = '$judul', isi = '$isi', date = '$date', gambar = '$gambar' WHERE id= $id;";
		
		//Meng-update Database 
		if(mysqli_query($con,$sql)){
			echo 'Berhasil Update Data';
		}else{
			echo 'Gagal Update ';
		}
		
		mysqli_close($con);
	}
?>