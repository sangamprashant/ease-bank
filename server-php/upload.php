<?php
$target_dir = "uploads/";
$target_file = $target_dir . uniqid() . "_" . basename($_FILES["file"]["name"]);

if (move_uploaded_file($_FILES["file"]["tmp_name"], $target_file)) {
    echo json_encode(["url" => "https://yourdomain.com/" . $target_file]);
} else {
    http_response_code(500);
    echo json_encode(["error" => "Upload failed"]);
}
?>
