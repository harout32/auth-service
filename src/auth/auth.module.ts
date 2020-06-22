import * as fs from 'fs';
import { Module, forwardRef } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserModule } from 'src/user/user.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { JwtConfigService } from './jwt-config.service';
@Module({
  imports: [
    forwardRef(() => UserModule),
    PassportModule,
    JwtModule.registerAsync({
      useClass: JwtConfigService
    }),
  ],
  providers: [
    AuthService,
    JwtConfigService,
  ],
  exports: [
    JwtModule,
    AuthService
  ],
})
export class AuthModule { }
