import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PayloadToken, PayloadTokenUsers } from '../interfaces';
import { errorsDictionary } from '../errors-dictionary';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthLibService {
  constructor(
    private readonly jwtService: JwtService) {}

  public async validatePassword(plainPassword: string, encryptedPassword: string) {
    const isValidPassword = await this.compareHash(plainPassword, encryptedPassword);

    if (!isValidPassword) {
      throw new UnauthorizedException(errorsDictionary.wrongPassword);
    }
    return isValidPassword;
  }

  public async createToken(payload: PayloadToken, options?: any) {
    return this.jwtService.sign(payload, options);
  }

  public async createTokenUsers(payload: PayloadTokenUsers, options?: any) {
    return this.jwtService.sign(payload, options);
  }

  public compareHash(data: any, encrypted: string): Promise<boolean> {
    return bcrypt.compare(data, encrypted);
  }

  public hash(data: any, saltOrRounds: string | number = 10): Promise<string> {
    return bcrypt.hash(data, saltOrRounds);
  }
}
