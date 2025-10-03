import { FinancialLiteracyEventCaption } from './routes/eventCaptions';
import { FinancialLiteracyPortal } from './routes/financialPortal';
import { FinancialSearchSystem } from './routes/financialSearchSystem';
import { FinancialLiteracyCaption } from './routes/literacyCaptions';
import { FinancialLiteracyEvent } from './routes/literacyEvent';
import { FinancialLiteracyPortalCaption } from './routes/portalCaptions';
import { FinancialSearchSystemCaption } from './routes/searchSystemCaption';
import { VirtualEducation } from './routes/virtualEducation';

export const financialLiteracyRoutes = [
  ...FinancialLiteracyCaption,
  ...FinancialLiteracyEventCaption,
  ...FinancialLiteracyPortalCaption,
  ...FinancialSearchSystemCaption,
  ...FinancialLiteracyEvent,
  ...FinancialLiteracyPortal,
  ...VirtualEducation,
  ...FinancialSearchSystem,
];
