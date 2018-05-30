'use strict';

const mysql       = require('anytv-node-mysql');
const winston     = require('winston');
const jwt         = require('jsonwebtoken');
const util        = require(__dirname + '/../helpers/util');
const config      = require(__dirname + '/../config/config');
const crypto      = require(__dirname + '/../lib/cryptography');
const sql         = require(__dirname + '/query/query');

exports.retrieve = (req,res,next)=>{
    let id = req.query.id; 
    function start(){
    let whereClause;
        if(id){
            whereClause = `id = ${id}`;
        }
        mysql.use('master')
        .query(sql
                .SEL(['firstname','lastName'],
                    'personal_info',whereClause
                    ),
                send_response
            ).end();
    }

    function send_response(err,result,args,last_query){
        if(err){
            winston.error('Error getting in personal info table', err, last_query);
            return next(err);
        }

        if(!result.length){
            return res.error('ZERO_RES','No records found');
        }

        res.items(result)
            .send();
    }

    start();
    
}
