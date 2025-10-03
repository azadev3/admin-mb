import { CarierBranch } from './routes/carierBranch';
import { CarierCaptions } from './routes/carierCaptions';
import { CarierDepartment } from './routes/carierDepartment';
import { CarierPosition } from './routes/carierPosition';
import { CarierVacationsDetail } from './routes/carierVacationDetail';
import { CarierVacations } from './routes/carierVacations';
import { CarierVolunteers } from './routes/carierVolunteers';
import { InternCaptions } from './routes/internCaptions';
import { InternDirections } from './routes/internDirections';
import { InternProgram } from './routes/internProgram';

export const carierRoutes = [
  ...CarierCaptions,
  ...CarierDepartment,
  ...CarierBranch,
  ...CarierPosition,
  ...CarierVacations,
  ...CarierVacationsDetail,
  ...InternCaptions,
  ...InternDirections,
  ...InternProgram,
  ...CarierVolunteers,
];
