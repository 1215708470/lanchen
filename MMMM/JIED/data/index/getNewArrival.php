<?php
header("Content-Type:application/json");
require_once("../init.php");
$sql="SELECT * FROM `gd_index_product` where seq_recommended!=0 order by seq_recommended";
$result=mysqli_query($conn,$sql);
echo json_encode(mysqli_fetch_all($result,1));//二维数组 
?>