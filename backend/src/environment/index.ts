import devEnv from './dev.environment';
import prodEnv from './prod.environment';
import { ENV_CONFIG } from './environment.interface';

let environment: ENV_CONFIG;

if (process.env.NODE_ENV === 'production') {
  environment = prodEnv;
} else {
  environment = devEnv;
}

export default environment;
