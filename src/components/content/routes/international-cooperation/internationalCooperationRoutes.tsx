import { InternationalCooperationCaption } from './routes/captions';
import { CentralBankCooperationCaption } from './routes/centralbankcaptions';
import { CentralBankCooperation } from './routes/centralbankcooperation';
import { InternationalEvent } from './routes/internationalEvent';
import { InternationalCooperationInitiative } from './routes/intiative';
import { MembershipInternationalOrganization } from './routes/membership';
import { InternationalFinancialOrganization } from './routes/organizations';

export const internationalCooperationRoutes = [
  ...InternationalCooperationInitiative,
  ...InternationalCooperationCaption,
  ...InternationalFinancialOrganization,
  ...CentralBankCooperationCaption,
  ...CentralBankCooperation,
  ...InternationalEvent,
  ...MembershipInternationalOrganization,
];
