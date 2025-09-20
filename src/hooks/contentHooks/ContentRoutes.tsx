import { lazy } from 'react';
import type { ContentRoutesInterface } from '../../components/types/content/routeType';
import { heroRoutes } from '../../components/content/routes/heroRoutes';
import { focusRoutes } from '../../components/content/routes/focusRoutes';
import { blogsRoutes } from '../../components/content/routes/blogRoutes';
import { advertisementRoutes } from '../../components/content/routes/advertisementRoutes';
import { digitalPortalRoutes } from '../../components/content/routes/digitalPortalRoutes';
import { mediaRoutes } from '../../components/content/routes/mediaRoutes';
import { macroDocumentRoutes } from '../../components/content/routes/macroDocumentRoutes';
import { otherInfoRoutes } from '../../components/content/routes/otherInfoRoutes';
import { socialRoutes } from '../../components/content/routes/socialRoutes';
import { phonesRoutes } from '../../components/content/routes/phonesRoutes';
import { translatesRoutes } from '../../components/content/routes/translatesRoutes';
import { percentCorridorRoutes } from '../../components/content/routes/percentCorridorRoutes';
import { bankSectoryRoutes } from '../../components/content/routes/bankSectoryRoutes';
import { monetarRoutes } from '../../components/content/routes/monetarRoutes';
import { inflationRoutes } from '../../components/content/routes/inflationRoutes';
import { aboutRoutes } from '../../components/content/routes/about-page/aboutRoutes';
import { logoRoutes } from '../../components/content/routes/logoRoutes';
import { centralBankNoteRoutes } from '../../components/content/routes/bankNoteRoutes';
import { addressRoutes } from '../../components/content/routes/addressRoutes';
import { interviewRoutes } from '../../components/content/routes/interview/interviewRoutes';
import { eventsRoutes } from '../../components/content/routes/events/eventsRoutes';
import { directorRoutes } from '../../components/content/routes/about-page/directorRoutes';
import { statisticalRoutes } from '../../components/content/routes/statistical/statisticalRoutes';
import { legalActsRoutes } from '../../components/content/routes/legal-acts/legalActsRoutes';
import { insuranceRoutes } from '../../components/content/routes/market-participants/insurance/insuranceRoutes';
import { banksRoutes } from '../../components/content/routes/market-participants/banks/banksRoutes';
import { creditUnionsRoutes } from '../../components/content/routes/market-participants/credit-unions/creditUnionsRoutes';
import { creditUnionPaymentRoutes } from '../../components/content/routes/market-participants/credit-union-payments/creditUnionPaymentRoutes';
import { registrationSecurityRoutes } from '../../components/content/routes/market-participants/registration/registrationSecurityRoutes';
import { shareHolderRegisterRoutes } from '../../components/content/routes/market-participants/share-holder/shareHolderRegisterRoutes';
import { controlMeasuresRoutes } from '../../components/content/routes/market-participants/control-measures/controlMeasuresRoutes';
const Home = lazy(() => import('../../components/content/components/home/Home'));

export const CONTENT_ROUTES: ContentRoutesInterface[] = [
  { id: 'home-charts', route: '/', component: <Home /> },
  ...logoRoutes,
  ...heroRoutes,
  ...focusRoutes,
  ...blogsRoutes,
  ...advertisementRoutes,
  ...interviewRoutes,
  ...digitalPortalRoutes,
  ...mediaRoutes,
  ...macroDocumentRoutes,
  ...otherInfoRoutes,
  ...socialRoutes,
  ...phonesRoutes,
  ...addressRoutes,
  ...translatesRoutes,
  ...percentCorridorRoutes,
  ...bankSectoryRoutes,
  ...centralBankNoteRoutes,
  ...monetarRoutes,
  ...inflationRoutes,
  ...aboutRoutes,
  ...eventsRoutes,
  ...directorRoutes,
  ...statisticalRoutes,
  ...legalActsRoutes,
  // Market Participants
  ...insuranceRoutes,
  ...banksRoutes,
  ...creditUnionsRoutes,
  ...creditUnionPaymentRoutes,
  ...registrationSecurityRoutes,
  ...shareHolderRegisterRoutes,
  ...controlMeasuresRoutes,
];
