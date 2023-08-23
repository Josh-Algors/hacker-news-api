import { Injectable } from '@nestjs/common';
import * as dotenv from 'dotenv';

dotenv.config({ path: __dirname + '/./../../.env' });

export const configuration: any = {
  env: process.env.NODE_ENV ?? 'development',
  port: process.env.APP_PORT ?? 3000,
  hackerNewsBaseUrl: process.env.HACKER_BASE_URL,
};


@Injectable()
export class AppService {
  getHello(): string {
    return `Welcome to Hacker News API!, please go to this url http://localhost:${process.env.APP_PORT}/api to view our documentation`;
  }
}
