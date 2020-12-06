<?php
$data = [
  'SikfNjDu3iW2' => '小明', 'RicjEhdciEjS' => '小红',
  'SKDOwj89d2jd' => '小张', 'ScJreEnxEW2x' => '小王'
];
$name = $_COOKIE['name'];
echo '您的用户名是：' . $data[$name];