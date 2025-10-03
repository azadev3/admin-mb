import { AnnualReport } from './routes/annualReport';
import { CybersecurityStrategy } from './routes/cybersecurityStrategy';
import { EconometricModel } from './routes/econometricModel';
import { EconometricModelFile } from './routes/econometricModelFile';
import { FinancialFlow } from './routes/financialFlow';
import { MicrofinanceModel } from './routes/microfinanceModel';
import { PolicyConcept } from './routes/policyConcept';
import { PublicationCaption } from './routes/publicationCaptions';
import { RoadmapOverview } from './routes/roadmapOverview';
import { StaffArticle } from './routes/staffArticle';
import { StaffArticleCaption } from './routes/staffarticlecaption';
import { StaffArticleFile } from './routes/staffArticleFile';

export const publicationsRoutes = [
  ...PublicationCaption,
  ...EconometricModel,
  ...EconometricModelFile,
  ...StaffArticleCaption,
  ...StaffArticle,
  ...StaffArticleFile,
  ...AnnualReport,
  ...FinancialFlow,
  ...MicrofinanceModel,
  ...CybersecurityStrategy,
  ...PolicyConcept,
  ...RoadmapOverview,
];
