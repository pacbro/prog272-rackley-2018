import ReactDOMServer from 'react-dom/server';
import express from 'express';

var express = require('express');
var router = express.Router();


const unknown = 'unknown';
const addresses = [
    {
        firstName: unknown,
        lastName: unknown,
        address: unknown,
        city: unknown,
        state: unknown,
        zip: unknown,
        phone: unknown,
        fax: unknown,
        tollfree: unknown
    },
    {
        firstName: 'Patty',
        lastName: 'Murray',
        address: '154 Russell Senate Office Building',
        city: 'Washington',
        state: 'D.C.',
        zip: '20510',
        phone: '(202) 224-2621',
        fax: '(202) 224-0238',
        tollfree: '(866) 481-9186'
    },
    {
        firstName: 'Bradley',
        lastName: 'Byrne',
        address: '119 Cannon House Office Building',
        city: 'Washington',
        state: 'D.C.',
        zip: '20510',
        phone: '(202) 225-4931',
        fax: unknown,
        tollfree: unknown
    },
    {
        firstName: 'Martha',
        lastName: 'Roby',
        address: '442 Cannon House Office Building',
        city: 'Washington',
        state: 'D.C.',
        zip: '20510',
        phone: '(202) 225-2901',
        fax: unknown,
        tollfree: unknown
    },
    {
        firstName: 'Robert',
        lastName: 'Aderholt',
        address: '235 Cannon House Office Building',
        city: 'Washington',
        state: 'D.C.',
        zip: '20510',
        phone: '(202) 225-4876',
        fax: unknown,
        tollfree: unknown
    },
    {
        firstName: 'Gary',
        lastName: 'Palmer',
        address: '330 Cannon House Office Building',
        city: 'Washington',
        state: 'D.C.',
        zip: '20510',
        phone: '(202) 225-4921',
        fax: unknown,
        tollfree: unknown
    }
];


/* GET home page. */
router.get('/', function(req, res, next) {
    'use strict';

    res.render('index', { title: 'AddressMaven',
  initialState: addresses[0] });
});

module.exports = {router;
res.send(addresses)};
