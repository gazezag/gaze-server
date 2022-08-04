import { getRouter } from './useRouterContext';
import userRouter from './routes/user.routes';
import performanceRouter from './routes/performance.routes';

export default getRouter([userRouter, performanceRouter]);
