import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

// * install
// ? yarn add @nestjs/passport

@Injectable()
export class LocalAuthGuard extends AuthGuard('local') {}
