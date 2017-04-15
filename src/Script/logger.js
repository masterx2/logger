/**
 * Created by masterx2 on 4/15/17.
 */

import defaults from 'lodash/defaults';
import fetch from 'unfetch';

module.exports = class Logger {
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
            body: JSON.stringify(defaults({
                appKey: this.appKey
            }, data))
        })
    }
}