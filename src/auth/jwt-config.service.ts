import * as fs from 'fs';
import * as path from 'path';
import { JwtOptionsFactory, JwtModuleOptions } from "@nestjs/jwt";


export class JwtConfigService implements JwtOptionsFactory {
    createJwtOptions(): JwtModuleOptions {
        const publicPath = path.resolve(__dirname, '../secrets/public.pem');
        const privatePath = path.resolve(__dirname, '../secrets/private.pem');
        return {
            publicKey: fs.readFileSync(publicPath),
            privateKey: fs.readFileSync(privatePath),
            signOptions: { expiresIn: '60s' },
        };
    }
}