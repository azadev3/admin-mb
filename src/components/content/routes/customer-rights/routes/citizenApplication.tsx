import { lazy } from 'react';

const CitizenApplicationShow = lazy(
  () =>
    import(
      '../../../components/customer-rights/citizen-application/CitizenApplicationShow'
    ),
);
const CitizenApplicationCreate = lazy(
  () =>
    import(
      '../../../components/customer-rights/citizen-application/CitizenApplicationCreate'
    ),
);

const CitizenApplicationEdit = lazy(
  () =>
    import(
      '../../../components/customer-rights/citizen-application/CitizenApplicationEdit'
    ),
);

export const CitizenApplication = [
  {
    id: 'customer-rights-CitizenApplication-show',
    route: '/customer-rights/citizenapplication',
    component: <CitizenApplicationShow />,
  },
  {
    id: 'customer-rights-CitizenApplication-create',
    route: '/customer-rights/citizenapplication/create',
    component: <CitizenApplicationCreate />,
  },
  {
    id: 'customer-rights-CitizenApplication-create',
    route: '/customer-rights/citizenapplication/edit/:id',
    component: <CitizenApplicationEdit />,
  },
];
