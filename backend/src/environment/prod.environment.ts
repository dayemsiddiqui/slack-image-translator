import { ENV_CONFIG } from './environment.interface';

const environment: ENV_CONFIG = {
  mode: 'prod',
  port: process.env.PORT || 8080,
};

export default environment;
