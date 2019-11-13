import devEnv from './dev.environment';
import prodEnv from './dev.environment';
import { ENV_CONFIG } from './environment.interface';

let environment: ENV_CONFIG;

if (process.env.PROD) {
  environment = prodEnv;
} else {
  environment = devEnv;
}

export default environment;
