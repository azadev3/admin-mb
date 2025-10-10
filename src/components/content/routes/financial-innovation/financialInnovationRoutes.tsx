import { Cbdc } from './routes/cbdc';
import { CustomEditingMode } from './routes/customEditingMode';
import { Ekyc } from './routes/ekyc';
import { OpenBanking } from './routes/openBanking';
import { OpenBankingFile } from './routes/openBankingFiles';
import { VirtualActive } from './routes/virtualActive';

export const financialInnovationRoutes = [
  ...OpenBanking,
  ...OpenBankingFile,
  ...CustomEditingMode,
  ...VirtualActive,
  ...Ekyc,
  ...Cbdc,
];
