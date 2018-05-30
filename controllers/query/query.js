'use strict';

const _ = require('lodash');

module.exports = {
    SEL : (field,tblName,whereClause)=>{
        let fields;

        if(Array.isArray(field)){
            fields          = _.concat(field.toString());            
        }

        fields = field;

            let selectSql   = `SELECT ${fields} `,
                tableName   = `FROM ${tblName} `,
                where       = whereClause == undefined ? `` : `WHERE ${whereClause}`;

            let queryStmt   = selectSql + tableName + where;

            return queryStmt;
    },

    UPD : (tblName,fields,whereClause)=>{
            let updateSql   = `UPDATE ${tblName}`,
                fieldName   = `SET ${fields}`,
                where       = whereClause == undefined ? `` : `WHERE ${whereClause}`;
            
            let queryStmt   = selectSql + fieldName + where;

            return queryStmt;
    },

    DEL : (tblName,fields,whereClause)=>{
            let deleteSql   = `DELETE FROM ${tblName}`,
                where       = whereClause == undefined ? `` : `WHERE ${whereClause}`;
            
            let queryStmt   = selectSql + fieldName + where;

            return queryStmt;
    }
}