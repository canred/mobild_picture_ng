import { A } from "@angular/cdk/keycodes";
import { environment } from '../environments/environment';

// 根據環境變數設定 ENV，並輸出當前環境
const ENV = environment.NODE_ENV as 'development' | 'production';
console.log('ENV:', ENV);

// 定義 Config 介面
interface Config {
  BASE_URL: string;
  SYSTEM_VERSION: string;
  title_name: string;
}

// 定義 CONFIG 常數，包含開發和生產環境的設定
const CONFIG: { [key in 'development' | 'production']: Config } = {
  development: {
    // development 環境設定
    BASE_URL: 'http://localhost:3001',
    SYSTEM_VERSION: '1.0.0',
    title_name: 'Canred相簿'
  },
  production: {
    // production 環境設定
    BASE_URL: 'http://localhost:3002',
    SYSTEM_VERSION: '1.0.0',
    title_name: 'Canred相簿'
  }
};

// 根據當前環境選擇對應的設定
const CURRENT_CONFIG = CONFIG[ENV];

// 定義並輸出 APP_CONFIG 常數
export const APP_CONFIG = {
  SYSTEM_VERSION: CURRENT_CONFIG.SYSTEM_VERSION,
  API_ROOT: `${CURRENT_CONFIG.BASE_URL}/api`,
  API_WEB_ROOT: CURRENT_CONFIG.BASE_URL,
  BROWSER_TARGET: environment.browserTarget,
  APP_NAME: 'Mobile Picture App',
  title_name: CURRENT_CONFIG.title_name
};
