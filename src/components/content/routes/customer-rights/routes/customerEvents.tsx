import { lazy } from 'react';

const CustomerEventsShow = lazy(
  () => import('../../../components/customer-rights/customer-events/CustomerEventsShow'),
);
const CustomerEventsCreate = lazy(
  () =>
    import('../../../components/customer-rights/customer-events/CustomerEventsCreate'),
);

const CustomerEventsEdit = lazy(
  () => import('../../../components/customer-rights/customer-events/CustomerEventsEdit'),
);

export const CustomerEvents = [
  {
    id: 'customer-rights-CustomerEvents-show',
    route: '/customer-rights/customer-events',
    component: <CustomerEventsShow />,
  },
  {
    id: 'customer-rights-CustomerEvents-create',
    route: '/customer-rights/customer-events/create',
    component: <CustomerEventsCreate />,
  },
  {
    id: 'customer-rights-CustomerEvents-create',
    route: '/customer-rights/customer-events/edit/:id',
    component: <CustomerEventsEdit />,
  },
];
