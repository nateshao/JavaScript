<?php
if (isset($_FILES['file']) && $_FILES['file']['error'] === UPLOAD_ERR_OK) {
  $name = time() . '.dat';
  if (move_uploaded_file($_FILES['file']['tmp_name'], './' . $name)) {
    echo $name;
  }
}