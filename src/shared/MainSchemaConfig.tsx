import type { FieldDefinition } from './form/FormField';

export const MainSeoSchema: FieldDefinition[] = [
  { label: 'Şəkil başlığı', name: 'imageTitle', type: 'text', multilang: true },
  { label: 'Şəkil ALT', name: 'imageAlt', type: 'text', multilang: true },
  { label: 'Meta Başlıq', name: 'metaTitle', type: 'text', multilang: true },
];

export const MainSeoSchemaOnlyMeta: FieldDefinition[] = [
  {
    label: 'Meta Başlıq',
    name: 'metaTitle',
    type: 'text',
    multilang: true,
  },
  {
    label: 'Meta Açıqlama',
    name: 'metaDescription',
    type: 'text',
    multilang: true,
  },
  {
    label: 'Meta Açar Söz',
    name: 'metaKeyword',
    type: 'text',
    multilang: true,
  },
];
