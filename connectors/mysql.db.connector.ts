import * as mysql from 'mysql';
import { ReadSecret } from '../src/helpers/read-secret/read-secret';

export const CONN = mysql.createPool({
    connectionLimit: 20,
    // host: '107.180.3.164',
    host: 'mysql762.umbler.com',
    port: 41890,
    user: 'usr_fideliu',
    password: 'usr_fideliu123',
    database: 'fideliu',
    connectTimeout: 15000,
    // converts column values to native Javascript types
    typeCast: true
});

/**
 * @example
 *
 * CONN.getConnection((err, connection) => {
 *      // connected, unless 'err' is set
 *      connection.query('SELECT something FROM table', (error, results, fields) => {
 *          // done with the connection, return it to the pool
 *          connection.release();
 * 
 *          // Handle error after the release.
 *          if (error) throw error;
 *      })
 * })
 * 
 */
