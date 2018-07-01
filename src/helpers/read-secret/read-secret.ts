import * as fs from 'fs';
import { URL } from 'url';

export class ReadSecret {
    static read (secret: string): string {
        if (process.env[secret]) {
            return process.env[secret];
        } else {
            return fs.readFileSync(new URL(`file:///run/secrets/${secret}`), 'utf-8');
        }   
    }
}
