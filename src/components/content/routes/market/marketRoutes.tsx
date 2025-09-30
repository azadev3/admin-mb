import { IndexIncreasingsRoutes } from './routes/indexIncreasing';
import { IndexPeriodsRoutes } from './routes/indexPeriod';
import { MarketDegreesRoutes } from './routes/marketDegree';
import { MarketInformationsRoutes } from './routes/marketInformation';
import { MethodologyExplainsRoutes } from './routes/methodologyExplain';

export const MarketRoutes = [
  ...MethodologyExplainsRoutes,
  ...MarketDegreesRoutes,
  ...MarketInformationsRoutes,
  ...IndexPeriodsRoutes,
  ...IndexIncreasingsRoutes,
];
