<?php
/**
 * Created by PhpStorm.
 * User: masterx2
 * Date: 4/14/17
 * Time: 7:04 PM
 */

define('DOC_ROOT', __DIR__.'/../');
require DOC_ROOT.'vendor/autoload.php';

$app = new \Logger\App();
$app->dispatch();