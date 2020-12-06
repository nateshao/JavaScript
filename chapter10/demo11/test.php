<?php
$callback = isset($_GET['callback']) ? $_GET['callback'] : '';
if (!preg_match('/^\w{1,32}$/', $callback)) {
    header('HTTP/1.1 403 Forbidden');
    exit;
}
echo $callback . '({"data":456});';