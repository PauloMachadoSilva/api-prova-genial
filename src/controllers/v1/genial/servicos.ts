import { GenialService } from './../../../services/genial/genial.services';
import * as Express from 'express';
import {
    Controller, Get, Render, Post, 
    Authenticated, Required, BodyParams,
    Delete, Req, Res, QueryParams, PathParams
} from '@tsed/common';
import { Query } from '../../../helpers/query/query';
import { Observable, Subscription } from 'rxjs';

@Controller('/genial')
export class ServicosController {
    constructor (
        private _query: Query,
        private _usuarioService: GenialService
    ) {

    }
    @Get('/servicos/consultar/')
    @Authenticated()
    async consultar (         
        @Req() request: Express.Request,
        @Res() response: Express.Response
    ): Promise<any> {
        return this
            ._usuarioService            
            .consultarServicos()
            .toPromise()
            .then(results => {
                response.send(results || []);
            });
    }
}
