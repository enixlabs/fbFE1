import { env } from './.env';

export const environment = {
  production: true,
  apiUrl: 'https://api.nxie.uk/v1',
  version: env['npm_package_version'],
  serverUrl: 'https://api.nxie.uk/v1',
  defaultLanguage: 'en-US',
  supportedLanguages: ['de-DE', 'en-US', 'es-ES', 'fr-FR', 'it-IT'],
  firebase: {
    apiKey: "AIzaSyDOElXZK3h08ZqEIqSGYQNaiTa9IsXUrOM",
    authDomain: "nxie-1b1d1.firebaseapp.com",
    projectId: "nxie-1b1d1",
    storageBucket: "nxie-1b1d1.appspot.com",
    messagingSenderId: "582315731303",
    appId: "1:582315731303:web:edab00ab6897d85eea27c2",
    measurementId: "G-Z67Y7GEQ0N"
  }
};
