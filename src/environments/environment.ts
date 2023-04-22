import { env } from './.env';

export const environment = {
  production: false,
  apiUrl: 'http://localhost:3021/v1',
  version: env['npm_package_version'] + '-dev',
  serverUrl: 'http://localhost:3021/v1',
  defaultLanguage: 'en-US',
  supportedLanguages: ['de-DE', 'en-US', 'es-ES', 'fr-FR', 'it-IT'],
  firebase: {
    projectId: 'nxie-1b1d1',
    appId: '1:582315731303:web:edab00ab6897d85eea27c2',
    databaseURL: 'https://nxie-1b1d1-default-rtdb.europe-west1.firebasedatabase.app',
    storageBucket: 'nxie-1b1d1.appspot.com',
    apiKey: 'AIzaSyDOElXZK3h08ZqEIqSGYQNaiTa9IsXUrOM',
    authDomain: 'nxie-1b1d1.firebaseapp.com',
    messagingSenderId: '582315731303',
    measurementId: 'G-Z67Y7GEQ0N',
  }
};
