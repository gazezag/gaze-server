import * as dotenv from 'dotenv';

// const path = process.env.NODE_ENV === 'dev' ? '.env.dev' :
// process.env.NODE_ENV === 'staging' ? '.env.staging' : '.env.prod';

const path = {
  development: '.env.development'
}[process.env.NODE_ENV || 'development'];

dotenv.config({ path });
