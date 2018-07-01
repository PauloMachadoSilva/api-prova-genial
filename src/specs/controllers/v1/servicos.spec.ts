import { ServicosController } from './../../../controllers/v1/genial/servicos';
import 'jasmine';
import * as request from 'request';
import { inject, Done, bootstrap } from '@tsed/testing';
import { Server } from '../../../server';

 describe('Account Controller', () => {
         beforeEach(bootstrap(Server));

    it('', inject([ServicosController], (ServicosController: ServicosController) => {
        
     }));
});
