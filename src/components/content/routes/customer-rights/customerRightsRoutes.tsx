import { CitizenApplication } from './routes/citizenApplication';
import { CitizenCategory } from './routes/citizenCategory';
import { ComplaintIndex } from './routes/complaintIndex';
import { ComplaintIndexCategory } from './routes/complaintIndexCategory';
import { CustomerDocuments } from './routes/customerDocument';
import { CustomerEvents } from './routes/customerEvents';
import { CustomerRightCaptions } from './routes/customerRightCaptions';
import { Infographic } from './routes/customerRightInfographic';
import { InformationBulletin } from './routes/informationBulletin';
import { PaymentServices } from './routes/paymentServices';

export const customerRightsRoutes = [
  ...CustomerRightCaptions,
  ...CitizenCategory,
  ...CitizenApplication,
  ...Infographic,
  ...ComplaintIndexCategory,
  ...ComplaintIndex,
  ...CustomerEvents,
  ...CustomerDocuments,
  ...PaymentServices,
  ...InformationBulletin,
];
