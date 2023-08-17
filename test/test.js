'use strict';
var expect = require('chai').expect;
var index = require('../dist/index.js');

describe('getAuthTokenWithEmail function test',  () => {

    it('getAuthTokenWithEmail result', async () => {

        try{
            const result = await index.getAuthTokenWithEmail(
                'baseUrl',
                'email',
                'password'
            );

            console.log('result')
            console.log(result)

        }catch(err) {
            console.log('error')
            console.log(err)
        }

    })
})
