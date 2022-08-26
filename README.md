# gaze-server

The server of the front-end performance monitoring platform

## usage

1. clone the project
2. configure the database
   ```typescript
   // src/config/index.ts
   export const MySQLConfig = {
     DB_NAME: 'gaze',
     HOST: '127.0.0.1',
     PORT: 3306,
     USER_NAME: 'username', // your username
     PASSWORD: 'password', // your password
     CONNECTION_LIMIT: 60 * 60 * 1000,
     CONNECT_TIMEOUT: 1000 * 60 * 60,
     ACQUIRE_TIMEOUT: 60 * 60 * 1000,
     TIMEOUT: 1000 * 60 * 60 * 1000
   };
   ```
3. execute the sql file( `src/gaze.sql` )

4. run it
   ```sh
     npm run dev
   ```
