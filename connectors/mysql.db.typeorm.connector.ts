import { ConnectionManager, Connection } from 'typeorm';
import *  as Path from 'path';
import { ReadSecret } from '../src/helpers/read-secret/read-secret';

import { TABLES } from '../src/entities/manifest';

const connectionManager: ConnectionManager = new ConnectionManager();

// export const ORMCONN: Connection = connectionManager.create({
//     name: 'aws-relational',
//     type: 'mysql',
//     host: ReadSecret.read('AWS_DB_RELATIONAL'),
//     port: parseInt(ReadSecret.read('AWS_DB_RELATIONAL_PORT')),
//     username: ReadSecret.read('AWS_DB_RELATIONAL_USER'),
//     password: ReadSecret.read('AWS_DB_RELATIONAL_PASSWORD'),
//     database: 'Conta_Corrente',
//     entities: TABLES
// });

export const ORMCONN: Connection = connectionManager.create({
    name: 'aws-relational',
    type: 'mysql',
    host: '107.180.3.164',
    //port: parseInt(ReadSecret.read('AWS_DB_RELATIONAL_PORT')),
    username: 'usr_fideliu',
    password: 'usr_fideliu',
    database: 'fideliu',
    entities: TABLES
});
