import { A } from "@angular/cdk/keycodes";
import { environment } from '../environments/environment';

const ENV = environment.NODE_ENV as 'development' | 'production';
console.log('ENV:', ENV);

interface Config {
  BASE_URL: string;
  SYSTEM_VERSION: string;
}

const CONFIG: { [key in 'development' | 'production']: Config } = {
  development: {
    BASE_URL: 'http://localhost:3001',
    SYSTEM_VERSION: '1.0.0',
  },
  production: {
    BASE_URL: 'http://localhost:3001',
    SYSTEM_VERSION: '1.0.0',
  }
};

const CURRENT_CONFIG = CONFIG[ENV];

export const APP_CONFIG = {
  SYSTEM_VERSION: CURRENT_CONFIG.SYSTEM_VERSION,
  API_ROOT: `${CURRENT_CONFIG.BASE_URL}/api`,
  API_WEB_ROOT: CURRENT_CONFIG.BASE_URL,
  BROWSER_TARGET: environment.browserTarget
};
