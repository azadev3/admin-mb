import { lazy } from 'react';

const InterviewCreate = lazy(() => import('../components/interview/InterviewCreate'));
const InterviewEdit = lazy(() => import('../components/interview/InterviewEdit'));
const InterviewShow = lazy(() => import('../components/interview/InterviewShow'));

export const interviewRoutes = [
  {
    id: 'interview-show',
    route: '/musahibeler-ve-cixislar',
    component: <InterviewShow />,
  },
  {
    id: 'interview-create',
    route: '/musahibeler-ve-cixislar/create',
    component: <InterviewCreate />,
  },
  {
    id: 'interview-edit',
    route: '/musahibeler-ve-cixislar/edit/:id',
    component: <InterviewEdit />,
  },
];
