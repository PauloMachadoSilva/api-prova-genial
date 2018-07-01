import { CONN } from '../../../connectors/mysql.db.connector';
import { Service } from '@tsed/common';
import { Observable } from 'rxjs';
import { Connection, MysqlError, FieldInfo } from 'mysql';

interface IExpectedQueryResults {
    results: any;
    fields: FieldInfo[] | IMetaData[];
}

@Service()
export class Query {
    private queryString: string;
    private values: Array<any>;

    private isMySql = false;
    private isOra = false;

    constructor (
        
    ) {

    }

    
    mySql () {
        this.isMySql = true;
        this.isOra = false;

        return this;
    }

    
    ora () {
        this.isMySql = false;
        this.isOra = true;

        return this;
    }

   
    set (queryString: string, values?: Array<any>) {
        this.queryString = queryString;
        this.values = values;

        return this;
    }

   
    reset (): void {
        this.isMySql = false;
        this.isOra = false;
        this.queryString = undefined;
        this.values = undefined;
    }

   
    exec (): Observable<IExpectedQueryResults> {
        if (this.isMySql) {
            return this.execMySQL();
        } else if (this.queryString === null) {
            throw new Error('Must set a query to execute.');
        } else {
            throw new Error('Must set the type of the query calling mySql() or ora() instance methods.');
        }
    }

  
    private execMySQL (): Observable<IExpectedQueryResults> {
        return Observable.create(observer => {
            CONN.getConnection((err, conn) => {
                if (err) {
                    observer.error(err);
                    observer.complete();
                    this.reset();
                    return;
                }

                
                conn.query(this.queryString, this.values, (err: MysqlError, results?: any, fields?: FieldInfo[]) => {
                    conn.release();
    
                    if (err) {
                        observer.error(err);
                    } else {
                        observer.next({ results, fields });
                    }
    
                    observer.complete();
                    this.reset();
                });
            });
        });
    }
}
