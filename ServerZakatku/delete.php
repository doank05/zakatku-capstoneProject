<?php 

$con = mysqli_connect("localhost", "root","","dbzakatku" );

$id = $_POST["id"];

$sql= "DELETE * FROM berita WHERE id ='$id'";

$result = mysqli_query($con, $sql);

if($result) {
    echo "Data Terhapus";
} 
else {
    echo "Gagal";
}
mysqli_close($con)


 ?>
