<?php
/**
 * Created by PhpStorm.
 * User: masterx2
 * Date: 4/14/17
 * Time: 7:43 PM
 */

namespace Logger\ServiceProviders;


use Pimple\Container;
use Pimple\ServiceProviderInterface;

class RedisServiceProvider implements ServiceProviderInterface {
    public function register(Container $storage) {
        $storage['redis'] = function ($storage) {
            $config = $storage['config']['redis'];
            $redis = new \Redis();
            $redis->pconnect($config['host'], $config['port']);
            return $redis;
        };
    }
}