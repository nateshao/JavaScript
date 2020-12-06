<?php
$data = [
    ['id' => 1, 'user' => 'test', 'time' => '2018-01-01', 'content' => '评论111'],
    ['id' => 2, 'user' => 'test', 'time' => '2018-01-01', 'content' => '评论222'],
    ['id' => 3, 'user' => 'test', 'time' => '2018-01-01', 'content' => '评论233'],
    ['id' => 4, 'user' => 'test', 'time' => '2018-01-01', 'content' => '评论444'],
    ['id' => 5, 'user' => 'test', 'time' => '2018-01-01', 'content' => '评论555'],
    ['id' => 6, 'user' => 'test', 'time' => '2018-01-01', 'content' => '评论666'],
    ['id' => 7, 'user' => 'test', 'time' => '2018-01-01', 'content' => '评论777'],
    ['id' => 8, 'user' => 'test', 'time' => '2018-01-01', 'content' => '评论888'],
    ['id' => 9, 'user' => 'test', 'time' => '2018-01-01', 'content' => '评论999'],
    ['id' => 10, 'user' => 'test', 'time' => '2018-01-01', 'content' => '评论1010'],
];
$page = isset($_GET['page']) ? max((int)$_GET['page'], 1) : 1;
$size = 2;
$maxPage = ceil(count($data) / $size);
echo json_encode([
    'data' => array_slice($data, ($page - 1) * $size, $size),
    'maxPage' => $maxPage
]);