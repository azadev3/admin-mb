import { lazy } from 'react';

const InterviewShow = lazy(
  () => import('../../components/media/interview/InterviewShow'),
);
const InterviewCreate = lazy(
  () => import('../../components/media/interview/InterviewCreate'),
);
const InterviewEdit = lazy(
  () => import('../../components/media/interview/InterviewEdit'),
);

export const interviewRoutes = [
  { id: 'interview-show', route: '/interview', component: <InterviewShow /> },
  {
    id: 'interview-create',
    route: '/interview/create',
    component: <InterviewCreate />,
  },
  { id: 'interview-edit', route: '/interview/edit/:id', component: <InterviewEdit /> },
];
