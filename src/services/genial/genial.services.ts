import {
    Controller, Get, Render, Post, 
    Authenticated, Required, BodyParams,
    Delete,
    Service
} from '@tsed/common';
import { Query } from '../../helpers/query/query';
import { Observable } from 'rxjs';
import { ORMCONN } from '../../../connectors/mysql.db.typeorm.connector';
import { ReadFile } from '../../helpers/read-file/read-file';
import { Omit } from '../../../node_modules/type-zoo';

@Service()
export class GenialService {
    constructor (
        private _query: Query
    ) {

    }

    consultarServicos (
    ): Observable<any> {
        
        return this.
            _query
            .mySql()
            .set(ReadFile.read('queries/consultar-servicos.sql', __dirname),)
            .exec()
            .map(results => results.results);
    }
}