import InterviewCreate from '../components/interview/InterviewCreate';
import InterviewEdit from '../components/interview/InterviewEdit';
import InterviewShow from '../components/interview/InterviewShow';

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
