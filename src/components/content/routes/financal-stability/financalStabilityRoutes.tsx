import { FinancialStabilityCaptions } from './routes/captions';
import { FinancialInstitutions } from './routes/financial-instution';
import { FinancialStabilityReport } from './routes/financialstability';
import { MacroprudentialPolicyFramework } from './routes/macroprudential';
import { MacroprudentialPolicyFrameworkCaptions } from './routes/macroprudential-captions';
import { FinancialStabilityReportCaptions } from './routes/reportcaptions';
import {
  FinancingActivity,
  FinancingActivityCaptions,
} from './routes/financing-activity';
import { RoadmapSustainableFinance } from './routes/roadmapSustainableFinance';
import { GreenTaxonomy } from './routes/greenTaxnomoy';
import { RegulationControl } from './routes/regulationControl';
import { Disclosure } from './routes/disclosure';
import { FinancialEvent } from './routes/financialEvent';

export const financalStabilityRoutes = [
  ...FinancialStabilityCaptions,
  ...FinancialStabilityReportCaptions,
  ...FinancialStabilityReport,
  ...MacroprudentialPolicyFrameworkCaptions,
  ...MacroprudentialPolicyFramework,
  ...FinancialInstitutions,
  ...FinancingActivityCaptions,
  ...FinancingActivity,
  ...RoadmapSustainableFinance,
  ...GreenTaxonomy,
  ...RegulationControl,
  ...Disclosure,
  ...FinancialEvent,
];
