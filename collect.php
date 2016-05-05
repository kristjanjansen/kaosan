<?php

require "vendor/autoload.php";

use Predis\Collection\Iterator;

$redis = new Predis\Client();

$pattern = "ad-a-*";

$stat = [];

foreach (new Iterator\Keyspace($redis, $pattern) as $key) {
    $el = explode('-', $key);
    print_r($el);
    $stat[] = (object) [
        'id' => $el[2],
        $el[3] => $redis->get($key)
    ];

}

print_r($stat);