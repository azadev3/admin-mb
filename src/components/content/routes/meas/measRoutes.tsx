import { MeasInformationType } from './routes/informationType';
import { MeasIssuerType } from './routes/issuerType';
import { Meas } from './routes/meas';
import { MeasAbout } from './routes/measAbout';
import { SecurityType } from './routes/securityType';

export const measRoutes = [
  ...MeasAbout,
  ...MeasInformationType,
  ...MeasIssuerType,
  ...SecurityType,
  ...Meas,
];
