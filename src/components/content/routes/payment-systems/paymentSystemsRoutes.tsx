import { Captions } from './routes/captions';
import { PaymentSystemControlFile } from './routes/controlfile';
import { PaymentSystemControlService } from './routes/controlservice';
import { CorrespondentAccount } from './routes/correspondentAccount';
import { DigitalPayment } from './routes/digitalpayment';
import { DigitalPaymentReview } from './routes/digitalpayment-review';
import { InstantPaymentFAQ } from './routes/instantPaymentFaq';
import { InstantPaymentOrganization } from './routes/instantPaymentOrganization';
import { InstantPaymentPost } from './routes/instantPaymentPost';
import { InstantPaymentSystemControlFileler } from './routes/instantPaymentSystem';
import { Lottery } from './routes/lottery';
import { LotteryFaq } from './routes/lotteryfaq';
import { LotteryFile } from './routes/lotteryfile';
import { LotteryVideo } from './routes/lotteryvideo';
import { Nomination } from './routes/nomination';
import { NominationCaption } from './routes/nomination-caption';
import { NominationCategory } from './routes/nomination-category';
import { Participant } from './routes/participant';
import { ParticipantCategory } from './routes/participant-category';
import { Faq } from './routes/paymentsystem-standarts/faq';
import { StandartsFiles } from './routes/paymentsystem-standarts/files';
import { Standarts } from './routes/paymentsystem-standarts/standarts';
import { PaySystemControl } from './routes/paysystemcontrol';
import { RealTimeSettlementSystem } from './routes/realtimeSettlement';
import { Regulation } from './routes/regulation';
import { Software } from './routes/software';
import { StateProgramsCaptions } from './routes/state-programs/captions';
import { StateProgramCategories } from './routes/state-programs/categories';
import { StateProgram } from './routes/state-programs/stateprogram';
import { Tariff } from './routes/tariff';
import { TechnicalDocument } from './routes/technicalDocument';

export const paymentSystemsRoutes = [
  ...Captions,
  ...RealTimeSettlementSystem,
  ...CorrespondentAccount,
  ...TechnicalDocument,
  ...Software,
  ...InstantPaymentSystemControlFileler,
  ...InstantPaymentPost,
  ...InstantPaymentOrganization,
  ...InstantPaymentFAQ,
  ...Regulation,
  ...Tariff,
  ...ParticipantCategory,
  ...Participant,
  ...Standarts,
  ...StandartsFiles,
  ...Faq,
  ...StateProgramsCaptions,
  ...StateProgramCategories,
  ...StateProgram,
  ...DigitalPayment,
  ...NominationCaption,
  ...NominationCategory,
  ...Nomination,
  ...Lottery,
  ...LotteryFile,
  ...LotteryVideo,
  ...LotteryFaq,
  ...PaymentSystemControlFile,
  ...PaySystemControl,
  ...PaymentSystemControlService,
  ...DigitalPaymentReview,
];
