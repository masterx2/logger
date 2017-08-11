<?php

namespace Logger;

use Logger\ServiceProviders\RedisServiceProvider;
use Pimple\Container;
use Symfony\Component\HttpFoundation\Request;

/**
 * Created by PhpStorm.
 * User: masterx2
 * Date: 4/14/17
 * Time: 7:09 PM
 */

class App {

    /** @var Container */
    public $storage;

    public function __construct() {
        $this->storage = new Container(
            ["config" => [
                "redis" => [
                    "host" => "localhost",
                    "port" => 6379
                ]
            ]]
        );

        $this->storage['request'] = function () {
            return Request::createFromGlobals();
        };

        $this->storage->register(new RedisServiceProvider());
    }

    public function dispatch() {
        /** @var Request $request */
        $request = $this->storage['request'];
        $method = strtolower($request->getMethod());

        try {
            call_user_func([$this, $method.'Method']);
        } catch (\Exception $e) {
            http_response_code(404);
        }
    }

    public function optionsMethod() {
        /** @var Request $request */
        $request = $this->storage['request'];
        $origin = $request->server->get('HTTP_ORIGIN');

        header('Access-Control-Allow-Origin: ' . $origin);
        header('Access-Control-Allow-Headers: content-type');
    }

    public function getMethod() {
        echo 'Logger Server';
    }

    public function postMethod() {
        /** @var Request $request */
        $request = $this->storage['request'];
        $origin = $request->server->get('HTTP_ORIGIN');

        header('Access-Control-Allow-Origin: ' . $origin);
        header('Content-Type: application/json');

        $data = json_decode($request->getContent(), true);

        /** @var \Redis $redis */
        $redis = $this->storage['redis'];

        $app = $data['appKey'];
        unset($data['appKey']);

        $redis->sAdd($app, serialize($data));
        echo json_encode([status => 'ok']);
    }
}