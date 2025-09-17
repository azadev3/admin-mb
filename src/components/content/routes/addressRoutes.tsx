import { lazy } from 'react';

const AddressCreate = lazy(() => import('../components/address/AddressCreate'));
const AddressEdit = lazy(() => import('../components/address/AddressEdit'));
const AddressShow = lazy(() => import('../components/address/AddressShow'));

export const addressRoutes = [
  { id: 'address-show', route: '/address', component: <AddressShow /> },
  {
    id: 'address-create',
    route: '/address/create',
    component: <AddressCreate />,
  },
  {
    id: 'address-edit',
    route: '/address/edit/:id',
    component: <AddressEdit />,
  },
];
