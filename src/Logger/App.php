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

        var_dump([
            "query" => $request->query->all(),
            "request"  => $request->request->all(),
            "content" => $request->getContent(),
            "ass-cont-types" => $request->getAcceptableContentTypes(),
            "isXHR" => $request->isXmlHttpRequest(),
            "method" => $request->getMethod()
        ]);
    }
}