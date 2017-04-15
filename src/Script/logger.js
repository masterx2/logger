/**
 * Created by masterx2 on 4/15/17.
 */

import qs from 'qs';
import _ from 'lodash';
import fetch from 'unfetch';
import Promise from 'bluebird';

export default class Logger {
    constructor(config) {
        this.server = config.server;
        this.appKey = config.appKey;
    }

    log(data) {
        return fetch(this.server, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(_.defaults({
                appKey: this.appKey
            }, data))
        })
    }
}