import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'Poke Ionic GraphQL',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
