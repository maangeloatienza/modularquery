'use strict';

const should = require('chai').should();
const CORS = require(process.cwd() + '/index');


describe('Overall test', () => {

    it ('CORS should return a function that calls next if method is not OPTIONS', (done) => {
        CORS()({}, {}, done);
    });

    it ('CORS should call res.send() if method is OPTIONS', (done) => {
        CORS()(
            {method: 'OPTIONS'},
            {send: done},
            () => {}
        );
    });

    /**
     *
     * Hello, I think you're here because you noticed the lack of unit tests
     * Kindly add tests including adding a lot of different config
     * Also, improve code by checking config types
     * You can also further improve this test by using a real express app
     *
     */

});
