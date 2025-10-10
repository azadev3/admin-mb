import { Manager } from './routes/manager';
import { ManagerContact } from './routes/managercontact';
import { ManagerDetail } from './routes/managerdetail';

export const ManagerRoutes = [...Manager, ...ManagerDetail, ...ManagerContact];
