import * as env from 'dotenv';

env.config();

export const SERVER_HOST = process.env.SERVER_HOST || 'localhost';
export const SERVER_PORT = parseInt(process.env.SERVER_PORT || '', 10) || 3000;
export const SLACK_BOT_TOKEN = process.env.SLACK_BOT_TOKEN || '';
export const MY_HOST = process.env.MY_HOST || 'localhost';
export const MY_PORT = parseInt(process.env.MY_PORT || '', 10) || 3005;
export const MY_PROXY_PORT = parseInt(process.env.MY_PROXY_PORT || '', 10) || undefined;
export const AUTH_KEY = process.env.AUTH_KEY || '';
export const TRUSTED_USER_GROUPS = process.env.TRUSTED_USER_GROUPS || 'all';
export const LOGGING_LEVEL = process.env.LOGGING_LEVEL || 'info';
