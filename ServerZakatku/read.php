<?php 
 
$con = mysqli_connect("localhost", "root","","dbzakatku" );

$result = array();
$result['data'] = array();
$select = "SELECT * from berita";
$responce = mysqli_query($con, $select);

while($row = mysqli_fetch_array($responce))
{
    $index['id']    =$row['0'];
    $index['judul'] =$row['1'];
    $index['isi']   =$row['2'];
    $index['date']  =$row['3'];
    $index['gambar']=$row['4'];
    array_push($result['data'], $index);    
}

$result['success']='1';
echo json_encode($result);
        
?>