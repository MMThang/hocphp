<?php
$severname = "localhost";
$username = "root";
$password = "namstyle147";
$dbname = "hocphp";

$conn = new mysqli($severname, $username, $password, $dbname);
$mssv = $_POST["mssv"];
$hoten = $_POST["hoten"];
$email = $_POST["email"];
$gioitinh = $_POST["gioitinh"];
$sothichArr = $_POST["sothich"];
$sothich = "";
foreach ($sothichArr as $row) {
    $sothich .= $row . ",";
}
$quoctich = $_POST["quoctich"];
$ghichu = $_POST['ghichu'];

if ($conn->connect_error) {
    die("Connection Failed : " . $conn->connect_error);
} else {
    $stml = $conn->prepare("INSERT INTO user(mssv, hoten, email, gioitinh, sothich, quoctich, ghichu) VALUES(?, ?, ?, ?, ?, ?, ?)");
    $stml->bind_param("sssssss", $mssv, $hoten, $email, $gioitinh, $sothich, $quoctich, $ghichu);
    $stml->execute();
    echo "
       Them du lieu thanh cong
     ";
}
