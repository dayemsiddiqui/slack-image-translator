import { ENV_CONFIG } from './environment.interface';

const environment: ENV_CONFIG = {
  mode: 'development',
  port: process.env.PORT || 8080,
};

export default environment;
