import type { BaseID } from '../global';

export interface ContentRoutesInterface extends BaseID {
  route: string;
  component: React.ReactNode;
}
