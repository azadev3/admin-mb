interface VacationTypesInterface {
  label: string;
  value: number;
}

export const VacationTypes: VacationTypesInterface[] = [
  {
    value: 1,
    label: 'Full Time',
  },
  {
    value: 2,
    label: 'Part Time',
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
