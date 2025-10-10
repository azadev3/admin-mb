interface VacationTypesInterface {
  label: string;
  value: number;
}

export const VacationTypes: VacationTypesInterface[] = [
  {
    value: 1,
    label: 'Tam İş Günü',
  },
  {
    value: 2,
    label: 'Yarı İş Günü',
  },
  {
    value: 3,
    label: 'Remote',
  },
  {
    value: 4,
    label: 'Hybrid',
  },
  {
    value: 5,
    label: 'Freelance',
  },
];
