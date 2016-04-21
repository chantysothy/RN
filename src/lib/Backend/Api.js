'use strict';
/**
 * ## Async support
 */
require('regenerator/runtime');

import CONFIG from './config';
import _ from 'underscore';
import Backend from './Backend';



class Api {
    constructor(token) {
    //   super(token);

      console.log('token',token);
    //   if (!_.isNull(token) && _.isUndefined(token.sessionToken)) {
    //     throw 'TokenMissing';
    //   }
    //   this._sessionToken =
    //     _.isNull(token) ?  null :  token.sessionToken.sessionToken;
      //
      this.API_BASE_URL= CONFIG.API.BASE_URL;

    }

    async listNews(query = {}) {
        const page = query.page || 1;
        console.log(page);
        const pageRows = query.pageRows || 10;
        return await this._fetch({
          method: 'GET',
          url: `/news?page=${page}&pageRows=${pageRows}`,
        })
        .then((response) => {
          var json = response.json();
          if (response.status === 200 || response.status === 201) {
            return json;
          } else {
            throw(json);
          }
        })
        .catch((error) => {
          throw(error);
        });
    }

    async _fetch(opts) {
      opts = _.extend({
        method: 'GET',
        url: null,
        body: null,
        callback: null
      }, opts);

      var reqOpts = {
        method: opts.method,
        headers: {
        }
      };

    //   if (this._sessionToken) {
    //     reqOpts.headers['Authorization'] = 'Bearer ' + this._sessionToken;
    //   }

      if (opts.method === 'POST' || opts.method === 'PUT') {
        reqOpts.headers['Accept'] = 'application/json';
        reqOpts.headers['Content-Type'] = 'application/json';
      }

      if (opts.body) {
        reqOpts.body = JSON.stringify(opts.body);
      }

      console.log(this.API_BASE_URL + opts.url);

      return await fetch(this.API_BASE_URL + opts.url, reqOpts);

    }
}


require('./NewsApi')(Api);
export default Api;
