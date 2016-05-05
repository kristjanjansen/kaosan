<?php

require "vendor/autoload.php";

use Predis\Collection\Iterator;

$redis = new Predis\Client();

$pattern = "ad-*";

$stat = [];

foreach (new Iterator\Keyspace($redis, $pattern) as $key) {

    $el = explode('-', $key);

    $stat[] = (object) $el;

}

print_r($stat);