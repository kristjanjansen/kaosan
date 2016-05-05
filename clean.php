<?php

require "vendor/autoload.php";

use Predis\Collection\Iterator;

$redis = new Predis\Client();

$pattern = "*";

foreach (new Iterator\Keyspace($redis, $pattern) as $key) {

    $redis->del($key);

}